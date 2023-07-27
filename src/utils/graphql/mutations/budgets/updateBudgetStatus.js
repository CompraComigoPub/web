const updateBudgetStatusMt = `
    mutation (
        $budgetId : ID!,
        $status: String!, 
    ) {
        updateBudgetStatus(
            budgetId : $budgetId,
            status : $status
        ) {
            id
        }
    }

`;

export default updateBudgetStatusMt;
