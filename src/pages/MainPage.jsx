import json from '../data/products.json'
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../stores/cartSlice.js";
import '../App.css'

export const MainPage = () => {
  const data = json
  const cart = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    const isProductInCart = cart.some(item => item._id === product._id)

    if (!isProductInCart) {
      dispatch(cartActions.addProduct(product))
      console.log(cart)
    } else {
      alert('Product is already in the cart!')
    }
  }

  return (
    <div>
      <div className={'product-cont'}>
        {data && data.map((product) => (
          <div key={product._id} className="product">
            <img src={'https://cdn-icons-png.flaticon.com/512/6484/6484900.png'} alt={product.name} className={'img'}/>
            <h3>{product.name}</h3>
            <span>color: {product.color}</span>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  )
}