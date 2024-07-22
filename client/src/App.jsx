import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Photo_Services from './components/Photo_Services'
import Woodcraft_Services from './components/Woodcraft_Services'
import T_shirt_Services from './components/T_shirt_Services'
import Copyright from './components/Copyright'
import $ from  "jquery"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ApolloProvider client={client}>
      <Navbar />
      <T_shirt_Services />
      <Photo_Services />
      <Woodcraft_Services />
      <Copyright/>
      <Footer />
      </ApolloProvider>
    </>
  )
}

export default App
































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Photo_Services from './components/Photo_Services'
// import Woodcraft_Services from './components/Woodcraft_Services'
// import T_shirt_Services from './components/T_shirt_Services'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Navbar />
//       <T_shirt_Services />
//       <Photo_Services />
//       <Woodcraft_Services />
//       <Footer />
//     </>
//   )
// }

// export default App
