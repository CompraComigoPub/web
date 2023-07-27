const companyDataQR = `
  query companyData (
    $id: ID!
  ) {
    company (id: $id) {
      id,
      name,
      cnpj,
      tradeName,
      role,
      addresses {
        city,
        zipcode,
        neighborhood,
        street,
        state,
        numericIndentifier,
      },
      users {
        name,
        email,
        phone,
        cpf,
        position,
        id,
      }
      logo
    }
  }
`;

const companyDataByDocQR = `query companyDataByDoc (
  $cnpj: String!
) {
  companyByCnpj (cnpj: $cnpj) {
    id,
    name,
    cnpj
  }
}`;

export {
  companyDataQR,
  companyDataByDocQR
};

export default companyDataQR;
