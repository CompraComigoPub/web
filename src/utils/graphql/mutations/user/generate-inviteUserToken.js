const generateInviteUserToken = `
    mutation generateInviteUserToken {
        generateInviteUserToken
        {
        code 
        success
        message
        tokenGenerated
        }
    }
`;
export default generateInviteUserToken;