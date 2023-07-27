const buyerCompaniesByNetwork = `
  query (
    $skip: Int
    $take: Int
    $status: String
    $companyName: String
  ) {
    buyerCompaniesByNetwork(
      pagination: {
        skip: $skip
        take: $take
      },
      filter: {
        status: $status
        companyName: $companyName
      }
    ) {
      payload {
        status
        createdAt
        role
        company {
          id
          name
          tradeName
          logo
        }
      }
      totalValues
    }
  }
`;

export default buyerCompaniesByNetwork;
