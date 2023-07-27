const getOrder = `query (
    $id: ID!
) {
    order(id : $id){
      interestId
      status
      purchaseInterest {
        description
        title
        photo
        leadership {
          logo
          tradeName
        }
        creator {
          name
          photo
          position
        }
      }
      files {
        filename
        url
      }
      items {
        product {
          name
          photo
        }
        id
        deadlineAt
        shippingAt
        shippingType
        supplierName
        supplierEmail
        supplierPhone
        cost
        icms
        ipi
        description
        unity
        quantity
        additionalInfoForms {
          name 
          infos {
            value
            field
          }
        }
      }
    }
}`;

export default getOrder;
