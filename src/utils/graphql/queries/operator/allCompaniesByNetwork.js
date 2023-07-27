const allCompaniesByNetwork = `
  query (
    $skip: Int
    $take: Int
    $status: String
    $companyName: String
  ) {
    allCompaniesByNetwork(
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
        }
      }
      totalValues
    }
  }
`;

export default allCompaniesByNetwork;
