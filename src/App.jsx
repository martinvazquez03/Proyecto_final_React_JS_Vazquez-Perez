import './App.css'
import NavBarComponent from './components/NavBarComponent'
import ProductDetail from './components/ProductDetail'
import ProductFilter from './components/ProductFilter'
import ProductListComponent from './components/ProductListComponent'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ProductsProvider } from './context/ProductsContext'
import CartComponent from './components/CartComponent'

function App() {

  

  return (
    <>
      <BrowserRouter>
      <ProductsProvider>
      <CartProvider>
      <NavBarComponent/>
      
      <Routes>
        <Route exact path="/" element={<ProductListComponent greeting={"Bienvenidos a 1G-Store!"}/>}/>
        <Route exact path="/productos/:catId" element={<ProductFilter/>}/>
        <Route exact path="/:prodId" element={<ProductDetail/>}/>
        <Route exact path="/cart" element={<CartComponent/>}/>
      </Routes>
      </CartProvider>
      </ProductsProvider>
      </BrowserRouter>
    </>
  )
}

export default App
