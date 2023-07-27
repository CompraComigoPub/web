const updateNetworkStatus = `
    mutation updateNetworkStatus(
        $companyId: ID!,
        $status: String!
        $description: String
    ){
        updateNetworkStatus(
            companyId: $companyId,
            status: $status
            description: $description
        ){
            networkId
        }
    }
`;
export default updateNetworkStatus;
