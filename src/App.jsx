import './App.css'
import NavBarComponent from './components/navBarComponent'
import ProductListComponent from './components/ProductListComponent'

function App() {

  return (
    <>
      <NavBarComponent/>
      <ProductListComponent greeting={"Bienvenidos a 1G-Store!"}/>
    </>
  )
}

export default App
