const createAddress = `
    mutation createAddress(
        $state: String!,
        $city: String!,
        $neighborhood : String!,
        $numericIndentifier : Int,
        $companyId : ID!,
        $street: String!,,
        $zipcode : String!,
        $complement: String       
    )
    {
        createAddress(address : {
        state : $state,
        city : $city,
        neighborhood : $neighborhood,
        numericIndentifier : $numericIndentifier,
        companyId : $companyId,
        street:  $street,
        zipcode :  $zipcode,
        complement:$complement
        
        }) {
        id
        street
        zipcode
        city
        state
        street
        
        }
    }
`;
export default createAddress;