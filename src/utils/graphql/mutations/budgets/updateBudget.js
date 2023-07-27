const updateBudgetMt = `
    mutation (
        $budgetId : ID!,
        $description: String, 
    ) {
        updateBudget(
            budgetId : $budgetId,
            budgetUpdate : {
                description : $description,
            } 
        ) {
            id
        }
    }

`;

export default updateBudgetMt;
