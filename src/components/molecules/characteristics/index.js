import React from "react";
import { useForm } from "react-hook-form";

import InputSet from "../../molecules/input-set";
import { FaAngleDown } from "react-icons/fa";

import Button from "components/atoms/button";
// import { Alert } from "components/molecules/alert/__stories__/index.stories";

import { phoneMask } from "utils/input";

// loading the sass style fot the component
import "./index.scss";

function Characteristics(props) {
  const {
    className = "",
    children,
    values,
    setEnableButton,
    setValues,
    prev,
    next,
    step,
    hideBackButton,
    ...other
  } = props;

  const { register, handleSubmit } = useForm();
  const [additionalInfos, setAdditionalInfos] = React.useState({});

  const handleChange = (e, index, fieldId) => {
    let newAdditionalInfos = additionalInfos;
    newAdditionalInfos[index] = {
      ...newAdditionalInfos[index],
      [fieldId]: e.target.value,
    };

    setAdditionalInfos({ ...additionalInfos, ...newAdditionalInfos });
  };

  const getFormatAdditionalInfo = (index) => {
    const additionalInfo = additionalInfos[index];
    if (additionalInfo) {
      const formatedAddInfo = Object.keys(additionalInfos[index]).map((key) => {
        return {
          fieldId: key,
          value: additionalInfo[key],
        };
      });
      return formatedAddInfo;
    } else {
      return [];
    }
  };

  const onSubmit = handleSubmit((data) => {
    let newValues = data;
    newValues.items = newValues.items.map((value, index) => {
      const formatedAddInfo = getFormatAdditionalInfo(index);
      return {
        ...value,
        additionalInfos: formatedAddInfo,
      };
    });
    setValues({ ...values, ...newValues });
    next();
  });

  const handleOpen = (index) => {
    const forms = document.querySelectorAll('.form-item');
    const switches = document.querySelectorAll('.switch');
    if (forms[index].getAttribute('id') === 'form-item-close') {
      forms[index].setAttribute('id', 'form-item-open');
      switches[index].setAttribute('id', 'up');
    } else {
      forms[index].setAttribute('id', 'form-item-close');
      forms[index].scroll(0,0);
      switches[index].setAttribute('id', 'down');
    }

  };

  const handleInvalid = (index) => {
    const forms = document.querySelectorAll('.form-item');
    if (forms[index].getAttribute('id') === 'form-item-close') {
      forms[index].setAttribute('id', 'form-item-open');
    }
  };

  return (
    <div
      className={"molecule__characteristics-container " + className}
      {...other}
    >
      <form
        id="area"
        onSubmit={onSubmit}
        // onChange={handleChange}
        className="form-container"
      >
        {values?.products?.map((product, index) => (
          <div onFocus={() => handleInvalid(index)} id={index === 0 ? "form-item-open" : "form-item-close"} className='form-item'>
            <div id='close-menu'>
              <span id="title">
                {product?.name}
              </span>
              <FaAngleDown id='down' className='switch' onClick={() => handleOpen(index)} />
            </div>
            <div className="infos">
              <InputSet
                {...register(`items.${index}.quantity`)}
                label="Quantidade*"
                id="quantity"
                min="0"
                // name="quantity"
                type="number"
                required
                step="any"

              />
              <InputSet
                {...register(`items.${index}.unity`)}
                label="Unidade*"
                type="select"
                required
              >
                <option selected disabled hidden value="">
                  Selecionar
                </option>
                <option value="toneladas">Toneladas</option>
                <option value="unidade">Unidade</option>
                <option value="caixas-100">Caixa com 100 unidades</option>
                <option value="pares">Pares</option>
              </InputSet>
            </div>
            <div className="observation-area">
              <span id="observation-title">Alguma Observação?</span>
              <textarea
                {...register(`items.${index}.description`)}
                id="purchase-comments"
                // name="purchase-comments"
                rows="5"
                cols="33"
                type="text"
                placeholder="Descreva aqui alguma observação sobre o pedido."
              />
            </div>
            {product?.forms?.map((form) => {
              return (
                <>
                  <hr id='separator' />
                  <span className="title">{form?.name || ""}</span>
                  <div id='add-info'>
                    {form?.fields.map((field) => {
                      return (
                        <InputSet
                          onChange={(e) => handleChange(e, index, field.id)}
                          label={field.required ? `${field.label}*` : field.label}
                          type={field.type === 'input' ? field.datatype : field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          defaultValue={field.defaultValue}
                        >
                          <option selected disabled hidden value="">
                            Selecionar
                          </option>
                          {field?.options.map((option, index) => {
                            return (
                              <>
                                <option value={option.values}>
                                  {option.label}
                                </option>
                              </>
                            );
                          })}
                        </InputSet>
                      );
                    })}
                  </div>
                </>
              );
            })}
            <hr />
            <div className="financial-title">
              <span>Informações da Última Compra</span>
            </div>
            <div className="financial-infos">
              <InputSet
                {...register(`items.${index}.cost`)}
                label="Preço da Última Compra"
                min="0"
                // name="price"
                type="number"
                step="any"
              // required
              />
              <InputSet
                {...register(`items.${index}.icms`)}
                label="ICMS da Última Compra"
                min="0"
                // name="icms"
                type="number"
                step="any"
              // required
              />
              <InputSet
                {...register(`items.${index}.ipi`)}
                label="IPI da Última Compra"
                min="0"
                // name="ipi"
                type="number"
                step="any"
              // required
              />
              <br />
              {/* <InputSet label="Prazo de Pagamento" name="payment-deadline" type="date" required /> */}
              {/* <InputSet
                {...register(`items.${index}.deadlineAt`)}
                label="Prazo de Pagamento*"
                type="select"
                required
              >
                <option selected disabled hidden value="">
                  Selecionar
                </option>
                <option value="5">5 dias</option>
                <option value="10">10 dias</option>
                <option value="12">12 dias</option>
                <option value="15">15 dias</option>
                <option value="20">20 dias</option>
              </InputSet> */}

              <InputSet
                {...register(`items.${index}.deadlineAt`)}
                label="Prazo de Pagamento da Última Compra"
                min="0"
                // name="ipi"
                type="text"
                step="any"
              // required
              />
              <InputSet
                {...register(`items.${index}.shippingAt`)}
                label="Prazo de Entrega da Última Compra"
                min="0"
                // name="ipi"
                type="date"
                step="any"
              // required
              />
              <InputSet
                {...register(`items.${index}.shippingType`)}
                label="Tipo de Frete da Última Compra"
                type="select"
              // required
              >
                <option selected disabled hidden value="">
                  Selecionar
                </option>
                <option value="CIF">CIF</option>
                <option value="FOB">FOB</option>
              </InputSet>
            </div>
            <div className="terms">
              <div id="terms-label">
                Declaro que estas informações são consistentes com meu sistema
                de gestão.
              </div>
            </div>
            <hr />
            <div className="supplies">
              <span className="title">Informações de Fornecimento</span>
              <div className="supplies-inputs">
                <InputSet
                  {...register(`items.${index}.supplierName`)}
                  label="Nome do Fornecedor*"
                  // name="supplier-name"
                  type="name"
                  required
                />
                <InputSet
                  {...register(`items.${index}.supplierEmail`)}
                  label="Email do Fornecedor"
                  type="email"
                />
                <InputSet
                  {...register(`items.${index}.supplierPhone`)}
                  label="Telefone do Fornecedor"
                  // name="supplier-phone"
                  type="tel"
                  placeholder="(00) 0000-0000"
                  onInput={phoneMask}
                />
              </div>
              <div className="terms">
                <div id="terms-label">
                  Dados do fornecedor utilizado na sua última compra.
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <Alert /> */}

        <div className="actions-container">
          <Button>
            <input id="form-button" type="submit" value="Continuar" />
          </Button>
        </div>
      </form>
      <Button id="back-button" variant="link" onClick={prev}>
        Anterior
      </Button>
    </div>
  );
}

export default Characteristics;
