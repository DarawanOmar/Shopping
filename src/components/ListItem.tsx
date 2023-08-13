import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type PropsType = {
    id: number
    name: string,
    price: number,
    imgUrl: string,
}

const ListItem = ({id,name, price, imgUrl}: PropsType) => {
  const {decreaseCartQuantity, getItemQuantity, increaseCartQuantity, removeFromCart} = useShoppingCart()//useContext(ShpooingCarContext)
  const qty:number = getItemQuantity(id) // id =1
  return (
    <div>
      <div className=" shadow-xl rounded-md p-8">
        <img src={imgUrl}  className="w-full max-h-[150px] h-full object-cover"/>
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl">{name}</h1>
          <h1>{formatCurrency(price)}</h1>
        </div>
        <div>
           {qty === 0 ? (
             <button onClick={()=> increaseCartQuantity(id)} className="btn-action btn-hover w-full">Add To Cart</button>
           ):(
            <div className="flex flex-col justify-center items-center space-y-2">
              <div className="flex justify-between items-center">
                <button onClick={()=> increaseCartQuantity(id)} className="btn-action btn-hover">+</button>
                <h1 className="text-2xl">{qty}<span className="text-gray-500 text-sm"> in cart</span> </h1>
                <button onClick={() => decreaseCartQuantity(id)} className="btn-action btn-hover">-</button>
              </div>
              <button onClick={() => removeFromCart(id)} className="btn-warning btn-hover">Remove</button>
            </div>
           )}
        </div>
      </div>
    </div>
  )
}

export default ListItem