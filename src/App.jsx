
import { CartWidget } from './Componets/CartWidget/CartWidget'
import { Footer } from './Componets/Footer/Footer';
import { ItemListContainer } from './Componets/ItemListContainer/ItemListContainer'
import { NavBar } from './Componets/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido"}/>
      <CartWidget/>
      <Footer/>
    </>
  )
}

export default App
