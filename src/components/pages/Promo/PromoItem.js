import React from 'react'
import Btn from '../../UI/Btn'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addPromoToCart} from '../../../store/Promo'

const PromoItem = ({detail}) => {
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
          <li key={item.id} className='promo_item b_r10px'>
            <h2 className='promo_item_name mb20px'>{item.name}</h2>
            <img className='promo_item_img mb20px b_r10px' src={item.image} alt={item.name}/>
            <h3>Set:</h3>
            <p className='mb20px ingr'>{item.set}</p>
            <div className='mb20px weight_box'>
              <b>Weight</b>
              <span>{item.weight}</span>
            </div>
            <div className='price_to-cart'>
              <span>Price: {item.price}$</span>
              {item.inCart ? openCart :
                <div onClick={() => dispatch(addPromoToCart(item.id))}>
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

export default PromoItem