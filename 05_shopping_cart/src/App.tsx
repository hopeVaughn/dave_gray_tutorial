import { useState } from 'react'
import {
  Header,
  Footer,
  ProductsList,
  Cart,
} from './components'

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart ? <Cart /> : <ProductsList />

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  )
  return content
}

export default App
