const singleFileUpload = `
    mutation ($file: Upload!) {
    singleUpload(file: $file) {
    filename
    url 
    id
    }
}
`;

export default singleFileUpload;