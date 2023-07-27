const createCompanyMt = `

mutation createCompanyComplete(
  $name: String!,
  $cnpj: String!,
  $tradeName : String!,
  $state: String!,
  $city: String!,
  $neighborhood : String!,
  $numericIndentifier : Int,
  $street: String!,
  $zipcode : String!,
  $complement: String,
  $networkId: String,
  $role: String
  $logo: String
  $user: AddUserOwnerInput!
  $token: String!
) {
  createCompany(company: {
    name: $name
    cnpj: $cnpj
    tradeName: $tradeName
    logo: $logo
  },
    address: {
      state: $state,
      city: $city,
      neighborhood: $neighborhood,
      numericIndentifier: $numericIndentifier,
      street: $street,
      zipcode: $zipcode,
      complement: $complement
    },
    networkId: $networkId,
    role: $role,
    user: $user,
    token: $token,
  ) {
    code
    company{
      id
    }
  }
}
`;
export default createCompanyMt;