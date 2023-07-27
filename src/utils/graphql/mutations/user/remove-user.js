const removeUser = `
    mutation removeUser ($id: ID!) {
    removeUser( input : {
        id: $id
    } ) {
        id
    }
}
`;

export default removeUser;
