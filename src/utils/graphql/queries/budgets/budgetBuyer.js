const budgetBuyer = `
  query (
    $id:ID!
  ) {
  budget(id : $id) {
    statusText
    status
    description
    demand {
      supplier {
        name
        tradeName
        cnpj
        logo
        addresses {
          city
          state
          street
          neighborhood
          zipcode
          numericIndentifier
        }
      }
      items {
        id
        product {
          name
          id
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
        name
        tradeName
        logo
        cnpj
        addresses {
          city
          state
          street
          neighborhood
          zipcode
          numericIndentifier
        }
      }
      items {
        shippingAt
        shippingType
        address {
          city
        }
        cost
        additionalInfoForms {
          name
          infos{
            field
            value
          }
        }
      }
    }
  }
}
`;

export default budgetBuyer;
