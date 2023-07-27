const purchaseCreated = `
    query {
        purchaseInterestsCreated{
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

export default purchaseCreated;
