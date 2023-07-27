const leadershipOrdersPending = `
  query (
    $take : Int,
    $skip: Int,
    $title: String,
    $status: String
  ){
    leadershipOrdersPending(pagination : {
      take : $take,
      skip: $skip
    }, filter : {
      title: $title
      status: $status
    }) {
      orders {
        company {
          name
          tradeName
        }
        purchaseInterest {
          title
        }
        id
        createdAt
        status
      }
      total
    }
  }

`;

export default leadershipOrdersPending;
