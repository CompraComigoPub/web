const invoice = `
    query (
      $id : ID!
    ) {
    invoice(id : $id) {
      id
      status
      budget {
        demand {
          supplier {
            name
            logo
            addresses {
              numericIndentifier
              city
              state
              street
              neighborhood
              zipcode
            }
          }
          totalPrice
          items {
          id
          product {
            name
            id
          }
          quantity
          unity
          price
          description
          ipi
          icms
        }
      }
      order {
        purchaseInterest {
          title
        }
        company {
          logo
          name
          tradeName
        }
        items {
          shippingAt
          shippingType
          address {
            numericIndentifier
            city
            state
            street
            neighborhood
            zipcode
          }
          additionalInfoForms {
            name
            infos {
              field
              value
            }
          }
        }
      }
      createdAt
    }
  }
}
`;
export default invoice;
