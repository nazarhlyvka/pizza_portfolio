import React from 'react'
import Btn from '../../UI/Btn'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addPizzaToCart} from '../../../store/Pizza'

const PizzaItem = ({detail}) => {
  const dispatch = useDispatch()

  const openCart = (
    <Link to='/cart'>
      <Btn content={<ShoppingCartIcon/>}/>
    </Link>
  )

  return(
    <>
      {detail.map(item => {
        return(
          <li key={item.id} className='pizza_item b_r10px'>
            <h2 className='pizza_item_name mb20px'>{item.name}</h2>
            <img className='pizza_item_img mb20px b_r10px' src={item.image} alt={item.name}/>
            <h3>Ingredients:</h3>
            <p className='mb20px ingr'>{item.ingredients}</p>
            <div className='mb20px weight_box'>
              <b>Weight:</b>
              <span>{item.weight}</span>
            </div>
            <div className='price_to-cart'>
              <span>Price: {item.price}$</span>
              {item.inCart ? openCart :
                <div onClick={() => dispatch(addPizzaToCart(item.id))}>
                  <Btn content={<ShoppingBasketIcon/>}/>
                </div>
              }
            </div>
          </li>
        )
      })}
    </>
  )
}

export default PizzaItem