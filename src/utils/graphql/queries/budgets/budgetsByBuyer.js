const budgetsByBuyer = `
query (
    $skip: Int
    $take: Int
    $title: String
    $status: String
) {
    budgetsByBuyer(
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
                company {
                    name
                }
            }

            createdAt

        }
    total
    }
}
`;

export default budgetsByBuyer;
