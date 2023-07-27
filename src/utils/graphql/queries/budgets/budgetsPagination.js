const budgetsPagination = `
query (
    $skip: Int
    $take: Int
    $title: String
    $status: String
) {
    budgetsPagination(
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
        statusText
            order {
                purchaseInterest {
                    title
                }
                company {
                    name
                    tradeName
                }
            }
            createdAt

        }
    total
    }
}
`;

export default budgetsPagination;
