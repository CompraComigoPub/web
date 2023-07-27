const addressByZipCode = `
    query(
      $zipcode: String!
    ) {
    addressByZipCode(zipcode: $zipcode) {
      city
      state
      street
      neighborhood
    }
  }
`;

export default addressByZipCode;
