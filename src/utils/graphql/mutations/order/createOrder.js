const createOrder = `
mutation createOrder (
    $items: [OrderItemInput]!,
    $interestId:ID!,
    $fileIds:[ID],
    $type:String!
  ) {
    createOrder(order: {
      items: $items
      interestId: $interestId
      fileIds: $fileIds
      type:$type
    }) {
      id
    }
  }
`;

export default createOrder;
