const createUserMt = `

mutation createUser(
    $name : String!,
    $password : String!,
    $email : String!,
    $phone : String,
    $position : String,
    $inviterId : String!,
    $companyId : ID!    
    $photo: String
    $cpf: String
    $role: String!
    $token: String!

) {
    createUser(input : {
      name : $name,
      password : $password,
      email : $email,
      phone : $phone,
      position : $position,
      inviterId : $inviterId,
      companyId : $companyId,
      photo: $photo
      cpf: $cpf
      role: $role
    }, token: $token) {
      id
      name
    }
  }
`;

export default createUserMt;

