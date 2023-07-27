const sendEmailWithUserInfo = `
    mutation sendEmailWithUserInfo ($message: String!) {
    sendEmailWithUserInfo( message : $message) {
        code
    }
}
`;

export default sendEmailWithUserInfo;
