const decodeInviteToken =`
  query decodeInviteCompanyToken(
    $token : String!
  ) {
    decodeInviteCompanyToken(
      token : $token
    ) {
      code
      success
      message
      decodedToken{
        role
        userId
        networkId
      }
    }
  }
`;

export default decodeInviteToken;
