const closedPurchasesByNetwork = `
    query (
      $title : String
    ) {
        closedPurchasesByNetwork (
          filter : {
            title : $title
          }
        ) {
        purchaseInterests {
        id
        description
        deadline
        createdAt
        title
        photo
        totalOrders
        leadership {
            logo
            tradeName
        }
      }
      count
    }
  }


`;

export default closedPurchasesByNetwork;
