const updatePurchaseInterestStatus = `
    mutation (
        $purchaseInterestId: ID!
        $status: String!
    ) {
        updatePurchaseInterestStatus(
            status: $status,
            purchaseInterestId: $purchaseInterestId
        ) {
            id
        }
    }

`;

export default updatePurchaseInterestStatus;