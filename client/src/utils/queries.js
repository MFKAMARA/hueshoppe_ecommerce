import {GQL} from "@apollo/client"
export const QUERY_CATERGORIES= `
query Categories {
  categories {
    _id
    name
  }
}
`
export const QUERY_PRODUCTS=`
query Products {
  products {
    _id
    category {
      _id
      name
    }
    description
    image
    price
    quantity
    name
  }
}
`
export const QUERY_SINGLE_PRODUCT=`
query Product($id: ID!) {
  product(_id: $id) {
    _id
    category {
      _id
      name
    }
    description
    image
    name
    price
    quantity
  }
}
`