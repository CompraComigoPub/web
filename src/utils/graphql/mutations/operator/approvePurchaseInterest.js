const approvePurchaseInterest = `
mutation (
    $purchaseInterestId: ID!
){
    approvePurchaseInterest(purchaseInterestId : $purchaseInterestId){
      approvedBy
    }
  }
`;
export default approvePurchaseInterest;
