const appendCompanyToNetwork = `
mutation appendCompanyToNetwork(
    $companyId : ID!,
    $role : String,
    $networkId : ID!
){
    appendCompanyToNetwork
    (
        companyId: $companyId,
        role: $role,
        networkId : $networkId
    )
    {
      networkId
    }
  }
`;

export default appendCompanyToNetwork;

