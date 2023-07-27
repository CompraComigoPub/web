const getSubCategoriesByCategoryId = `
query getSubCategoriesByCategoryId (
    $categoryId : String! 
) {
    getSubCategoriesByCategoryId ( categoryId : $categoryId ){
        label 
        id
    }
}
`;

export default getSubCategoriesByCategoryId;
