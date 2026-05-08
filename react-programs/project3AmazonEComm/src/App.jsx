import React from 'react'
import ShowAllProducts from './components/ShowAllProducts'
import ShowAllProducts2 from './components/ShowAllProducts2'
import ShowAllProducts3 from './components/ShowAllProducts3'
import AllProductsPage from './pages/AllProductsPage'
import RictTextBox2 from './pages/RictTextBox2'
import AllProductsPage1 from './pages/AllProductsPage1'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'
const App = () => {
  return (
  <Router>
      <NavBar/>
          <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/shop" element={<AllProductsPage1 />} />
                <Route path="/rich" element={<RictTextBox2 />} />
          </Routes>
  </Router>
  )
}

export default App