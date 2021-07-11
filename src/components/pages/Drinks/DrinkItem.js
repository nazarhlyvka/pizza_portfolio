import React from 'react'
import Btn from '../../UI/Btn'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addDrinkToCart} from '../../../store/reducers/Drinks'

const DrinkItem = ({detail}) => {
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
          <li key={item.id} className='drinks_item b_r10px'>
            <h2 className='drinks_item_name mb20px'>{item.name}</h2>
            <img className='drinks_item_img mb20px b_r10px' src={item.image} alt={item.name}/>
            <div className='mb20px ml_box'>
              <b>Liters</b>
              <span>{item.ml}</span>
            </div>
            <div className='price_to-cart'>
              <span>Price: {item.price}$</span>
              {item.inCart ? openCart :
                <div onClick={() => dispatch(addDrinkToCart(item.id))}>
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

export default DrinkItem