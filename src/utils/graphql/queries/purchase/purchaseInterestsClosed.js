const purchasesClosed = `
    query purchaseInterestsClosed(
        $skip: Int
        $take: Int
        $title: String!
        $status: String
    ) {
        purchaseInterestsClosed(
         pagination : {
            skip : $skip,
            take : $take
         },
        filter : {
        title: $title,
        status: $status
         }
        ){
        purchaseInterests {
        id
        description
        createdAt
        title
        status
      }
    }
  }


`;

export default purchasesClosed;
