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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <T_shirt_Services />
      <Photo_Services />
      <Woodcraft_Services />
      <Copyright/>
      <Footer />
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
