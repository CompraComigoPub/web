const openPurchasesByNetwork = `
    query (
      $title : String
    ) {
        openPurchasesByNetwork (
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

export default openPurchasesByNetwork;
