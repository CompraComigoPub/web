const usersByCompany = `
    query (
        $skip: Int
        $take: Int
        $name: String
    ) {
        usersByCompany(
            pagination: {
                skip: $skip
                take: $take 
            },
            filter: {
                name: $name
            }
        ){
        payload {
                id
                name,
                email,
                position,
                photo,
            }
        total
        }
    }
`;

export default usersByCompany;