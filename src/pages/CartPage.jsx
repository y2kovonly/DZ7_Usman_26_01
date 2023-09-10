import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../stores/cartSlice.js";

export const CartPage = () => {
  const cart = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        {cart.length <= 0 ? <div>there is no products in cart!</div> : null}
      </div>
      <div className={'product-cont'}>
        {cart && cart.map((product) => (
          <div key={product._id} className="product">
            <img src={'https://cdn-icons-png.flaticon.com/512/6484/6484900.png'} alt={product.name} className={'img'}/>
            <h3>{product.name}</h3>
            <span>color: {product.color}</span>
            <p>{product.price}</p>
            <button onClick={() => {
              dispatch(cartActions.removeProduct(product))
            }}>Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}