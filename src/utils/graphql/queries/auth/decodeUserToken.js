const decodeInviteUserToken =`
  query decodeInviteUserToken(
    $token : String!
  ) {
    decodeInviteUserToken(
      token : $token
    ) {
      code
      success
      message
      decodedToken{
        userId
        companyId
      }
    }
  }
`;

export default decodeInviteUserToken;
