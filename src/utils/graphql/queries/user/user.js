import {
  gql
} from "@apollo/react-hooks";

const getUser = gql`
  query {
    user {
      id
      name
      photo
      phone
      position
      firebaseId
      company {
        id
        tradeName
      }
      roleCompany
      role
      companyStatus
      companyNetworkId
      activities {
        id
        title
        visualized
        href
      }
    }
  }
`;

export default getUser;