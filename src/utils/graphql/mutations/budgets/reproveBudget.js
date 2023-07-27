const reproveBudgetMt = `
    mutation (
        $budgetId: ID!,
        $status: String!,
        $description: String!
    ) {
        reproveBudget(
            budgetId: $budgetId,
            status: $status,
            description: $description
        ) {
            id   
        }
    }
`;
export default reproveBudgetMt;
