import {
  gql
} from "@apollo/client";


const qr = gql`
query purchasesIAmPartOf ($companyId: ID!) {
  company(id: $companyId) {
    orders {
      items {
        quantity,
        product {
          id,
          sku,
          categoryId
        }
      },
      purchaseInterest {
        leadership {
          id,
          name,
          cnpj
        }
      }
    }
  }
}
`;

export default qr;
