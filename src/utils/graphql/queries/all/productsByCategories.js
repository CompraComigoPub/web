const qr = `
  query productsByCategories(
    $take : Int
    $skip: Int
    $name: String
    $categoriesId : [String]!
  ) {
    productsByCategories(pagination : { take: $take, skip: $skip },
        productName: $name,
        categoriesId: $categoriesId
      ) {
      products {
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
      count
    }
  }`;

export default qr;
