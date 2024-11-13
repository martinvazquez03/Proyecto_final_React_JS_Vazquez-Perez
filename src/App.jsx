import './App.css'
import NavBarComponent from './components/navBarComponent'
import ProductDetail from './components/ProductDetail'
import ProductListComponent from './components/ProductListComponent'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBarComponent/>
      
      <Routes>
        <Route exact path="/" element={<ProductListComponent greeting={"Bienvenidos a 1G-Store!"}/>}/>
        <Route exact path="/sofas/:catId" element={<ProductListComponent/>}/>
        <Route exact path="/mesas/:catId" element={<ProductListComponent/>}/>
        <Route exact path="/asientos/:catId" element={<ProductListComponent/>}/>
        <Route exact path="/:prodId" element={<ProductDetail/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
