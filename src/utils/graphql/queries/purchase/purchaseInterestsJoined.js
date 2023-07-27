const purchaseInterestJoined = `
    query {
        purchaseInterestJoined{
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

export default purchaseInterestJoined;
