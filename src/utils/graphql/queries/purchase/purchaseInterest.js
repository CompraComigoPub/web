const purchaseInterest =  `
query (
    $id: ID!
) {
	purchaseInterest(id : $id) {
    deadline
    createdAt
    description
    title
    totalQuantity
    photo
    operator {
      name 
      photo
      position
    }
    creator {
      name
      photo
      position
    }
    leadership {
      logo 
      tradeName
      id
    }
    orders {
      id
      company {
          id
          tradeName
          logo
      }
      files {
        filename
        url
      }
    }
    product {
      photo
    }
      
    }
  }  
  
`;
export default purchaseInterest;