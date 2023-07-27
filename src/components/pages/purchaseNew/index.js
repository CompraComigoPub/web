import CardBase from "components/atoms/base-card";
import Loader from "components/atoms/loader";
import TagCheckSet from "components/molecules/tagcheckset";
import Title from "components/molecules/title";
import FormCharacteristics from "components/organisms/form-characteristics";
import { useUser } from "utils/contexts/user";
import mutCreatePurchase from "utils/graphql/mutations/buyer/create-purchase";
// import FormInfo from 'components/organisms/form-informations';
import FormProd from "components/organisms/form-products";
import React from "react";
import { mutate } from "utils/graphql";
import { createOrder } from "utils/graphql/mutations/order";
import { getValidOrder } from "utils/generalHelper";
// loading the sass style fot the component
import "./index.scss";
import PurchaseInfo from "components/organisms/purchase-info";
import FormPublish from "components/organisms/form-publish";
import PurchaseConclusion from "components/molecules/purchase-conclusion";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import FormCategories from "components/organisms/form-categories";

function PurchaseNew(props) {
  const { className = "", children, ...other } = props;

  const [step, setStep] = React.useState(0);
  const [values, setValues] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [submitState, setSubmitState] = React.useState({});
  const [selectedItems, setSelectedItems] = React.useState([]);
  const { userData } = useUser();
  const lastStep = step === 5;

  async function create() {
    try {
      setIsLoading(true);
      const purchase = await createPurchaseInterest();
      const data = getValidOrder(values);
      const result = await mutate(createOrder, {
        items: data.items,
        fileIds: data.fileIds,
        interestId: purchase.id,
        type: "CREATE",
      });
      setSubmitState(result?.data);
      setIsLoading(false);
    } catch (err) {
      toast.error(err);
      setSubmitState(err);
      setIsLoading(false);
    }
  }

  async function createPurchaseInterest() {
    let purchase = values.purchase;
    purchase.leadershipId = userData.company.id;
    purchase.categoryId = values.category.id;
    purchase.photo = getPurchasePhoto();
    const { data } = await mutate(mutCreatePurchase, purchase);

    return data.createPurchaseInterest;
  }

  async function next() {
    if (step === 4) {
      await create();
    }
    setStep(step + 1);
    window.scrollTo(0, 0);
  }

  function prev() {
    if (step === 2) {
      setValues({ category: values.category });
      setSelectedItems([]);
    }
    setStep(step - 1);
    window.scrollTo(0, 0);
  }

  function getPurchasePhoto() {
    const productIds = values.products.map((product) => product.id);
    const hasMultiplesProducts = [...new Set(productIds)].length > 1;

    if (hasMultiplesProducts) return values?.category?.photo;
    return values?.products[0]?.photo;
  }

  return (
    <div className={"page__purchaseNew-container " + className} {...other}>
      <Title
        dataSubtitle={
          step === lastStep
            ? "Você preencheu sua intenção de compra"
            : "Cadastre uma intenção de compra e compartilhe com outras empresas"
        }
        dataType="big"
        separator
      >
        {step === lastStep ? "Publicação criada" : "Cadastrar nova compra"}
      </Title>

      {step < lastStep ? (
        <TagCheckSet
          separator
          list={[
            { label: "Categorias", checked: true },
            { label: "Produtos", checked: step >= 1 },
            { label: "Características", checked: step >= 2 },
            { label: "Informações", checked: step >= 3 },
            { label: "Publicação", checked: step >= 4 },
          ]}
        />
      ) : null}
      <main className="main-area">
        <FormCategories
          className={step === 0 ? null : "hidden"}
          next={next}
          values={values}
          setValues={setValues}
        />
        <FormProd
          className={step === 1 ? null : "hidden"}
          next={next}
          prev={prev}
          values={values}
          setValues={setValues}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        {values?.products && (
          <>
            <FormCharacteristics
              step={step}
              className={step === 2 ? null : "hidden"}
              next={next}
              prev={prev}
              values={values}
              setValues={setValues}
            />
            <PurchaseInfo
              className={step === 3 ? null : "hidden"}
              next={next}
              prev={prev}
              values={values}
              setValues={setValues}
            />
            <FormPublish
              className={step === 4 ? null : "hidden"}
              next={next}
              prev={prev}
              values={values}
              setValues={setValues}
              step={step}

            />
            <Conclusion
              className={step === 5 ? null : "hidden"}
              isLoading={isLoading}
              submitState={submitState}
            />
          </>
        )}
      </main>
    </div>
  );
}

function Conclusion(props) {
  const { isLoading, className } = props;

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className={className}>
      <CardBase id="conclusion" full className={"step-container "}>
        {isLoading ? (
          <Loader>Salvando dados</Loader>
        ) : (
          <PurchaseConclusion
            handleClick={handleClick}
            title={"Sua publicação está em análise"}
            subtitle={
              "Você será notificado quando a publicação for aprovada por nossa equipe!"
            }
          />
        )}
      </CardBase>
    </div>
  );
}

export default PurchaseNew;
