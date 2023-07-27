const mutCreatePurchase = `
mutation createPurchaseInterest(
  $leadershipId: ID!
  $description: String
  $deadline: Date
  $title: String
  $categoryId: ID
  $photo: String
) {
  createPurchaseInterest(purchaseInterest: {leadershipId: $leadershipId, 
    description: $description, 
    deadline: $deadline,
  title: $title,
  categoryId: $categoryId,
  photo: $photo }) {
    status
    description
    id
  }
}
`;

export default mutCreatePurchase;
