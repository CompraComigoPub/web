const qr = `
query PurchaseDetails ($purchaseId: ID!) {
  purchaseInterest(id: $purchaseId) {
    id,
    status,
    createdat,
    deadline, # a date for the end of the purchase interest to be done
    leadership {
      id,
      name,
      photo
    },
    # this is used to know how many companies are in this purchaseInterest and
    # sum their items so we can know the total number of items and their quantities
    orders {
      id,
      company {
        id,
        name,
        photo
      }
      items(limit: 1) { # for now, we only care about one item
        quantity
      }
    }
    items:orders (
      # we only need one of the orders, as all orders
      # in the same interest will have the same products
      limit:1
    ){
      id,
      items(limit: 1) {
        product {
          id,
          sku,
          photo,
          description,
          
          quantityType, # a string line "Toneladas", "Kgs" or "Unidades"
          tags {
            id,
            name
          }
        }
      }
    }
  }
}
`;

export default qr;
