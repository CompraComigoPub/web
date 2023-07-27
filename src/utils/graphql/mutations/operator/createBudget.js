const createBudgetMt = `
    mutation (
        $budget:BudgetInput
    ) {
        createBudget( budget: $budget ){
            id
        }
    }
`;

export default createBudgetMt;
