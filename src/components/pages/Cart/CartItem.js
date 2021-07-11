import React, { useCallback } from 'react'
import Btn from '../../UI/Btn'
import { useDispatch } from 'react-redux';
import { lessPizza, morePizza, removePizza } from '../../../store/reducers/Pizza';
import { lessDrinks, moreDrinks, removeDrinks } from '../../../store/reducers/Drinks';
import { lessPromo, morePromo, removePromo } from '../../../store/reducers/Promo';

const CartItem = ({detail}) => {
  const dispatch = useDispatch()

  const moreItem = useCallback((id, more) => {
    switch(id.split(' ')[0]) {
      case 'pizza':{
        dispatch(more ? morePizza(id) : lessPizza(id))
        break
      }
      case 'drink': {
        dispatch(more ? moreDrinks(id): lessDrinks(id))
        break
      }
      case 'promo': {
        dispatch(more ? morePromo(id) : lessPromo(id))
        break
      }
      default:
        return null
    }
  }, [dispatch])

  const removeFromCart = useCallback((id) => {
    switch(id.split(' ')[0]) {
      case 'pizza':{
        dispatch(removePizza(id))
        break
      }
      case 'drink': {
        dispatch(removeDrinks(id))
        break
      }
      case 'promo': {
        dispatch(removePromo(id))
        break
      }
      default:
        return null
    }
  }, [dispatch])

  return(
    <>
      {detail.map(item => {
        return(
          <li key={item.id} className='cart_item b_r10px'>
            <span onClick={() => removeFromCart(item.id)} className='cart_remove_item' >&times;</span>
            <h2 className='cart_item_name mb20px'>{item.name}</h2>
            <div className='cart_item_content'>
              <img className='content_img b_r10px' src={item.image} alt={item.name}/>
              <p className='content_amount'>Price: {item.amount}$</p>
              <div className='more_less'>
                <div onClick={() => moreItem(item.id, true)}>
                  <Btn content={<span className='fs'>+</span>}/>
                </div>
                <span className='content_how'>{item.quantity}</span>
                {item.quantity > 1 
                  ? <div onClick={() => moreItem(item.id, false)}>
                      <Btn content={<span className='fs'>-</span>}/>
                    </div> 
                  : <Btn disable={true} content={<span className='fs'>-</span>}/>}
              </div>
            </div>
          </li>
        )
      })}
    </>
  )
}

export default CartItem