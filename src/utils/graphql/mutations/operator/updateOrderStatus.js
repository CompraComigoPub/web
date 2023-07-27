const updateOrderStatus = `
mutation (
    $orderId: ID!,
    $status: String!
){
    updateOrderStatus(
      orderId : $orderId,
      status : $status
    ){
      status
    }
  }
`;
export default updateOrderStatus;
