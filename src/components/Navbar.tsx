import { Link } from 'react-router-dom'
import {FaShoppingCart } from 'react-icons/fa'
import { useShoppingCart } from '../context/ShoppingCartContext'


const Navbar = () => {
  const {cartItemsQuantity} = useShoppingCart()
  return (
    <div className='max-w-4xl bg-white mx-auto top-0 sticky z-10 shadow-xl p-4 px-6 flex justify-between items-center font-serif'>
        <h1 className='font-bold text-lg md:text-2xl '>Dara'<span className='text-emerald-600'>Store</span></h1>
        <div className="flex space-x-4">
            <Link to='/'>Home</Link>
            <Link to='/store'>Store</Link>
            <Link to='/about'>About</Link>
        </div>
        <div className='border-2 rounded-full p-2 border-black/30 hover:bg-emerald-500   duration-500 cursor-pointer'>
            <Link to='order'><h1 className='text-xl md:text-2xl relative text-emerald-500 hover:text-white'><FaShoppingCart/></h1></Link>
            {cartItemsQuantity == 0 ? null :(
              <h2 className='absolute top-2 right-5 bg-black rounded-full w-5 h-5 text-white flex justify-center text-center items-center '>{cartItemsQuantity}</h2>
            )}
        </div>
        
    </div>
  )
}

export default Navbar