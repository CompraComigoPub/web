const qr = `
  query allProducts(
    $take : Int
    $skip: Int
    $name: String
    $categoriesId : [String]
  ) {
    products(pagination : { take: $take, skip: $skip },
      filter : {
        name: $name
        categoriesId: $categoriesId
      }) {
      payload {
        id,
        photo,
        description,
        name
        productAttributes{
          attribute{
            label
          }
        }
        forms {
          name
          fields {
            id
          label
          type
          placeholder
          defaultValue
          type
          datatype
          required
          options {
            label
            value
          }
        }
      }
    }
      total
      perPage
    }
  }`;

export default qr;
