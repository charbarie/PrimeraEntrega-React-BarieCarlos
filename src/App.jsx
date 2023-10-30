
import { CartWidget } from './Componets/CartWidget/CartWidget'
import { ItemListContainer } from './Componets/ItemListContainer/ItemListContainer'

import { NavBar } from './Componets/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido"}/>
      <CartWidget/>
    </>
  )
}

export default App
