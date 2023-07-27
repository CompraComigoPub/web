const ordersJoinPending = `
  query (
    $skip: Int
    $take: Int
    $title: String
    $status: String
  ) {
    ordersJoinPending(
      pagination: {
        skip: $skip
        take: $take
      },
      filter: {
        title: $title
        status: $status
      }
    ) {
      orders {
        purchaseInterest {
          title
        }
        company {
          name
          tradeName
        }
        id
        createdAt
        status
      }
      total
    }
  }
`;

export default ordersJoinPending;
