const qr = `
query userData (
  $inviterId: ID!
) {
  user(id: $inviterId) {
    id,
    name,
    company {
      id,
      name,
      cnpj
    }
  }
}
`;

export default qr;
