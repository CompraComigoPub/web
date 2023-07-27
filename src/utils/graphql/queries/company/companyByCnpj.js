const companyByCnpj = `
  query companyByCnpj(
      $cnpj: String!
  ) {
  companyByCnpj(cnpj: $cnpj) {
      name
    }
  }
`;

export default companyByCnpj;