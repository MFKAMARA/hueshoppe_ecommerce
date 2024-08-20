import {gql} from "@apollo/client"
export const QUERY_CATEGORIES=gql `
query Categories {
  categories {
    _id
    name
  }
}
`
export const QUERY_PRODUCTS=gql`
query Products ($category: ID, $name: String){
  products (category:$category,name:$name) {
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
export const QUERY_SINGLE_PRODUCT=gql`
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
export const QUERY_SINGLE_USER=gql`
query User {
  user {
    _id
    email
    firstName
    lastName
    orders {
      _id
      products {
        _id
        category {
          _id
          name
        }
      }
      purchaseDate
    }
  }
}
`
export const QUERY_ORDERS=gql`
query Order($id: ID!) {
  order(_id: $id) {
    _id
    products {
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
}
`
export const QUERY_CHECKOUT=gql`
query Checkout($products: [ID]!) {
  checkout(products: $products) {
    session
  }
}
`