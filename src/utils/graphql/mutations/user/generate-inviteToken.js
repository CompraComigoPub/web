const generateInviteToken = `
    mutation generateInviteCompanyToken(
        $role: String!,
    ) {
        generateInviteCompanyToken(
        role : $role
        ) 
        {
        code 
        success
        message
        tokenGenerated
        }
    }
`;
export default generateInviteToken;