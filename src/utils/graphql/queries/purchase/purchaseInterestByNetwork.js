const purchaseByNetwork = `
    query (
      $title : String
    ) {
        purchaseInterestsByNetwork (
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
    }
  }


`;

export default purchaseByNetwork;
