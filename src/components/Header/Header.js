import React, { useEffect, useState, memo } from 'react'

import { NavLink, Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import CloseIcon from '@material-ui/icons/Close';
import CartBtn from './CartBtn';

import './Header.scss'
import { useDispatch, useSelector } from 'react-redux';
import { openCallBackModal, openOutModal } from '../../store/reducers/Modal';
import { addToCart } from '../../store/reducers/Cart';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const pizza = useSelector(state => state.pizza.toCart)
  const drinks = useSelector(state => state.drinks.toCart)
  const promo = useSelector(state => state.promo.toCart)
  const itemsInCart = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addToCart([...pizza, ...drinks, ...promo]))
  }, [dispatch, pizza, drinks, promo])

  const openCallBack = () => {
    dispatch(openOutModal())
    dispatch(openCallBackModal())
  }

  return(
    <header className='header'>
      <nav className='header_nav align_box'>
        <div className='nav_logo_burger'>
          <Link to='/'>
            <h2>Pizzao</h2>
          </Link>
          <IconButton className='burger' onClick={() => setOpenMenu(prev => !prev)}>
            {openMenu ? <CloseIcon/> : <MenuIcon/>}
          </IconButton>
        </div>
        <ul className={openMenu ? 'nav_menu' : 'nav_menu hide'}>
          <li><NavLink activeClassName='active' to='/pizza'>Pizza</NavLink></li>
          <li><NavLink to='/drinks'>Drinks</NavLink></li>
          <li><NavLink to='/promo'>Promo</NavLink></li>
        </ul>
        <div className={openMenu ? 'nav_cart_call' : 'nav_cart_call hide'}>
          <IconButton onClick={openCallBack}>
            <PhoneCallbackIcon/>
          </IconButton>
          <Link to='/cart'>
            <CartBtn how={itemsInCart.length}/>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default memo(Header)