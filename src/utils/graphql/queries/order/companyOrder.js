const getCompanyOrder = `query (
    $id: ID!
) {
    order(id : $id){
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

export default getCompanyOrder;
