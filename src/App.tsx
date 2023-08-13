import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import OrderShoppingCard from './pages/OrderShoppingCard'

const App = () => {
  return (
   <div className='font-serif'>
    <ShoppingCartProvider>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='order' element={<OrderShoppingCard/>}/>
      </Routes>
    </ShoppingCartProvider>
   </div>
  )
}

export default App