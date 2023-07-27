const productsInfoByPurchase = `
  query productsInfoByPurchase(
    $interestId: ID!
  ) {
    productsInfoByPurchase(interestId : $interestId ) {
      products {
        description
        id
        name
        photo
        forms {
          name
            fields {
              id
            label
            type
            placeholder
            defaultValue
            type
            datatype
            required
            options {
              label
              value
            }
          }
        }
      }
      categoryId
    }
  }
`;

export default productsInfoByPurchase;