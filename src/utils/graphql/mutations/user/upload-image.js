const uploadImage = `
    mutation uploadImage ($file: Upload) {
    uploadImage(file: $file) {
        url 
    }
}
`;

export default uploadImage;


