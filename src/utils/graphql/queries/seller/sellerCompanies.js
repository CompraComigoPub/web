const sellerCompanies = `
query (
    $skip: Int
    $take: Int
    $companyName: String
) {
    sellerCompanies(
        pagination: {
            skip: $skip
            take: $take 
        },
        filter: {
            companyName: $companyName
        }
    ){
    payload {
            company {
                id
                logo
                tradeName
            }
        }
    totalValues
    }
}
`;

export default sellerCompanies;
