const budgetSeller = `
  query (
    $id:ID!
  ) {
  budget(id : $id) {
    status
    description
    demand {
      id
      items {
        id
        product {
          name
        }
        quantity
        unity
        price
        totalPrice
        description
        ipi
        icms
      }
      totalPrice
    }
    order {
      purchaseInterest {
        title
      }
      company {
        addresses {
          city
          state
        }
      }
      items {
        shippingAt
        shippingType
        address {
          city
        }
        additionalInfoForms {
          name
          infos {
            value
            field
          }
        }
      }
    }
  }
}
`;

export default budgetSeller;
