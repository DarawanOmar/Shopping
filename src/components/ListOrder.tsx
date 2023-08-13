import { useShoppingCart } from '../context/ShoppingCartContext'
import storeitem from '../data/items.json'
import { formatCurrency } from '../utilities/formatCurrency'

type PropsType = {
    id: number
    quantity: number
}


const ListOrder = ({id,quantity}: PropsType) => {
    const {removeFromCart} = useShoppingCart()
    const items = storeitem.find(item=>item.id == id)
    
    if(items == null) return null   

  return (
    <div>
        <div className='border-2 p-4 rounded-md '>
            <img src={items.imgUrl} alt={items.name} className='w-[275px] h-[100px] object-cover'/>
            <div className='flex justify-between p-3'>
                <div className='flex space-x-1 items-center'>
                    <h1 className='font-bold text-xl'>{items.name}</h1> 
                    <span className='text-gray-500'>{quantity}<span className='text-xs'>x</span></span>
                </div>
                <h1>{formatCurrency(items.price)}</h1>
            </div>
            <div className=' p-3'>
                <button onClick={()=> removeFromCart(id)} className='btn-warning btn-hover w-full'> Remove</button>
                <h1 className='text-center pt-3'>Totol;{formatCurrency(quantity * items.price)}</h1>
            </div>
        </div>
     
    </div>
  )
}

export default ListOrder