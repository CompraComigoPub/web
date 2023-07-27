const ordersByPurchase = `
query ordersByPurchase(
    $id: ID!
) {
	purchaseInterest(id : $id) {
    notConsolidatedOrders {
      company {
          id
          tradeName
          logo
      }
      files {
        filename
        url
      }
      id
      items {
        product {
          name
          id
        }
        id
        quantity
        unity
        description
        cost
        icms
        ipi
        deadlineAt
        shippingAt
        shippingType
        supplierName
        supplierEmail
        supplierPhone
        additionalInfoForms {
          name 
          infos {
            field
            value
          }
        }
      }
    }
      
    }
  }  
  
`;
export default ordersByPurchase;
