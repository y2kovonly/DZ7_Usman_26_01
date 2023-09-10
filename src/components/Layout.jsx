import {NavLink, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import '../App.css'

export const Layout = () => {
  const cart = useSelector(state => state.cart.cart)

  return (
    <div>
      <nav className={'nav'}>
        <NavLink to={'/'}>Main</NavLink>
        <span>{' - '}</span>
        <NavLink to={'/cart'}>Cart</NavLink>
        <span>{' - '}</span>
        <span>Products in cart: {cart.length}</span>
      </nav>
      <Outlet/>
      <footer className={'footer'}>
        <a href="https://vk.com/gkkop">made by acided</a>
      </footer>
    </div>
  )
}