const invoicesPagination = `
  query (
    $skip: Int
    $take: Int
    $title: String
    $status: String
  ) {
    invoicesPagination(
      pagination: {
        skip: $skip
        take: $take
      },
      filter: {
        title: $title
        status: $status
      }
    ) {
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

export default invoicesPagination;
