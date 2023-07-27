const qr = `
query purchasesInMyNetworks ($companyId: ID!){
  networks(companyId: $companyId) {
#     all networks for the current user
    purchaseInterests {
      id,
      status,
      orders(limit: 1) {
        id
        items {
          product {
            id,
            sku
          quantity
        }
      }
      leadership {
        id,
        name
      }
    }
  }
}
`;

export default qr;
