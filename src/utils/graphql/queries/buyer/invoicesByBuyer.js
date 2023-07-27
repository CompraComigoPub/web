const invoicesByBuyer = `
query (
    $skip: Int
    $take: Int
    $title: String
    $status: String
) {
    invoicesByBuyer(
        pagination: {
            skip: $skip
            take: $take 
        },
        filter: {
            title: $title
            status: $status
        }
    ){
    invoices {
        id
        status
        budget { 
            order {
                purchaseInterest {
                    title
                }
            }
            createdAt
        }
    }
    total
    }
}
`;

export default invoicesByBuyer;


