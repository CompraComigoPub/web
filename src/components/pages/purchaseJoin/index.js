import CardBase from "components/atoms/base-card";
import Loader from "components/atoms/loader";
import TagCheckSet from "components/molecules/tagcheckset";
import Title from "components/molecules/title";
import FormCharacteristics from "components/organisms/form-characteristics";
import PageLoader from "components/organisms/loader";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "utils/graphql";
import PurchaseInfo from "components/organisms/purchase-info";
import { mutate } from "utils/graphql";
import { createOrder } from "utils/graphql/mutations/order";
import { getValidOrder } from "utils/generalHelper";
import PurchaseConclusion from "components/molecules/purchase-conclusion";
import { useHistory } from "react-router-dom";

// import { Alert } from 'components/molecules/alert/__stories__/index.stories';
// loading the sass style fot the component
import "./index.scss";
import FormProducts from "components/organisms/form-products";
import productsInfoByPurchase from "utils/graphql/queries/purchase/productsByPurchase";

function PurchaseJoin(props) {
  const { className = "", children, ...other } = props;
  const [step, setStep] = React.useState(0);
  const params = useParams();
  const interestId = params.purchaseId;
  const { data, loading } = useQuery(productsInfoByPurchase, { interestId });
  const [values, setValues] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [submitState, setSubmitState] = React.useState({});
  const [selectedItems, setSelectedItems] = React.useState(null);
  const [renderItems, setRenderItems] = React.useState(false);

  React.useEffect(() => {
    if (data?.productsInfoByPurchase) {
      const products = data.productsInfoByPurchase.products;
      setValues({
        ...values,
        products,
        category: {
          id: data.productsInfoByPurchase.categoryId,
        },
      });
      setSelectedItems(
        formatSelectedItems(data?.productsInfoByPurchase.products)
      );
    }
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  async function next() {
    step === 0 && setRenderItems(true);
    if (step === 2) {
      await create();
    }
    setStep(step + 1);
    window.scrollTo(0, 0);
  }


  function prev() {
    if (step === 1) {
      const products = data?.productsInfoByPurchase.products;
      setValues({ ...values, products });
      setSelectedItems(formatSelectedItems(products));
    }
    setStep(step - 1);
    window.scrollTo(0, 0);
  }

  function formatSelectedItems(products) {
    let formatSelectedItems = [];
    products.forEach((product) => {
      let item = formatSelectedItems.find(
        (item) => item?.value?.id === product.id
      );
      !item && formatSelectedItems.push({ value: product, quantity: 1 });
    });

    return formatSelectedItems;
  }

  async function create() {
    try {
      setIsLoading(true);
      const data = getValidOrder(values);
      const result = await mutate(createOrder, {
        items: data.items,
        fileIds: data.fileIds || [],
        interestId,
        type: "JOIN",
      });
      setSubmitState(result?.data);
      setIsLoading(false);
    } catch (err) {
      debugger;
      setSubmitState(err);
      setIsLoading(false);
    }
  }

  if (loading) {
    return <PageLoader>{"Carregando.."}</PageLoader>;
  }

  return (
    <div className={"page__purchaseJoin-container " + className} {...other}>
      <Title dataType="big" separator>
        Participar desta compra
      </Title>

      {step < 2 ? (
        <TagCheckSet
          separator
          list={[
            { label: "Produtos", checked: true },
            { label: "Características", checked: step === 1 },
            { label: "Informações", checked: step === 2 },
          ]}
        />
      ) : null}

      <main className="main-area">
        {values?.products && (
          <>
            <FormProducts
              className={step === 0 ? null : "hidden"}
              take={10}
              next={next}
              values={values}
              setValues={setValues}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              join={true}
            />
            {renderItems && (
              <>
                <FormCharacteristics
                  step={step}
                  className={step === 1 ? null : "hidden"}
                  next={next}
                  prev={prev}
                  values={values}
                  setValues={setValues}
                  hideBackButton={true}
                />
                <PurchaseInfo
                  className={step === 2 ? null : "hidden"}
                  next={next}
                  prev={prev}
                  values={values}
                  setValues={setValues}
                />
                <Conclusion
                  className={step === 3 ? null : "hidden"}
                  isLoading={isLoading}
                  submitState={submitState}
                />
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}

function Conclusion(props) {
  const { className, isLoading } = props;
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
            title={"Seu Pedido está em análise"}
            subtitle={
              "Você será notificado quando o pedido for aprovado por nossa equipe!"
            }
            handleClick={handleClick}
          />
        )}
      </CardBase>
    </div>
  );
}

export default PurchaseJoin;
