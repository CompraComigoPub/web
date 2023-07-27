const budgetsBySupplier = `
query (
    $skip: Int
    $take: Int
    $title: String
    $status: String
) {
    budgetsBySupplier(
        pagination: {
            skip: $skip
            take: $take 
        },
        filter: {
            title: $title
            status: $status
        }
    ){
    budgets {
        id
        status
        statusText
            order {
                purchaseInterest {
                    title
                }
            }
            createdAt

        }
    total
    }
}
`;

export default budgetsBySupplier;
