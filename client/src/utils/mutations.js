import {gql} from "@apollo/client"
export const ADD_USER=gql`
mutation AddUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
  }
}
`
export const LOGIN=gql`
mutation AddUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
  }
}
`
export const ADD_ORDER=gql`
mutation AddOrder($products: [ID]!) {
  addOrder(products: $products) {
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
export const UPDATE_PRODUCT=gql`
mutation UpdateProduct($id: ID!, $quantity: Int!) {
  updateProduct(_id: $id, quantity: $quantity) {
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

