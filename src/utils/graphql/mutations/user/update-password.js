const updatePassword = `
    mutation updatePassword(
        $email: String!,
    ) {
        updatePassword(
        email : $email
        ) 
        {
        code 
        success
        message
        }
    }
`;
export default updatePassword;