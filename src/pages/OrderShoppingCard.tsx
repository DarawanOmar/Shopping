import ListOrder from "../components/ListOrder"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import itemStroe from '../data/items.json'

const OrderShoppingCard = () => {

  const {cartItems} = useShoppingCart()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className='text-center font-bold text-xl md:text-2xl'> Totol Price Order : 
        {formatCurrency(cartItems.reduce((total,cartItem)=>{
          const storeItems = itemStroe.find(item => item.id == cartItem.id)
          return total + (storeItems?.price || 0) * cartItem.quantity
        },0))}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
        {cartItems.map(item=>{
          return <ListOrder key={item.id} {...item}/>
        })}
      </div>
    </div>
  )
}

export default OrderShoppingCard