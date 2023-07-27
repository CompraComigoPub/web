const qr = `
query userDataByAuth0Id ($auth0Id: String!) {
  userByAuth0Id(auth0Id: $auth0Id) {
    id,
    name,
    email,
    inviterId,
    invitedId,
    auth0Id,
    phone,
    photo,
    position,
    cpf,
    companyId,
    company {
      id,
      name,
      tradeName,
      cnpj,
      logo,
      orders {
        id,
        status,
      }
    }
  }
}`;

export default qr;
