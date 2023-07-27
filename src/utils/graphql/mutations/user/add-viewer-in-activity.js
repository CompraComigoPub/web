const addViewerInActivity = `
    mutation addViewerInActivity ($docsId : [String]!) {
        addViewerInActivity(docsId : $docsId)
    }
`;

export default addViewerInActivity;
