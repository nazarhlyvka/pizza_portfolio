import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainWr from '../Wrapper/MainWr'
import CartItem from './CartItem'
import Form from '../../Modal/Form'
import SuccessModal from '../../Modal/SuccessModal'
import './Cart.scss'
import { openOrderForm } from '../../../store/Order'

const Cart = () => {
  const {cart} = useSelector(state => state.cart)
  const {orderForm, orderSuccess} = useSelector(state => state.order)
  const dispatch = useDispatch()

  let order = 0
  let amount = 0
  if(cart.length > 0) {
    cart.forEach(item => amount += item.amount)
    order = cart.map(item => {
      return{
        name: item.name,
        amount: item.amount,
        quantity: item.quantity,
      }
    })
  }

  const cartList = (
    <>
      <ul className='align_box cart_list'>
        <CartItem detail={cart}/>
      </ul>
      <div className='cart_amount mb20px'>
        <span>Total price: {amount}$</span>
      </div>
      {orderForm 
        ? <div className='form_fix mb20px'><Form btnName='Confirm' makeOrder={true} order={order}/></div>
        : <div className='cart_order'>
            <button onClick={() => dispatch(openOrderForm())} className='b_r10px'>Order</button>
          </div>
      }
    </>
  )
  return(
    <MainWr>
      {orderSuccess ? <div className='success_order_wr window_h'><SuccessModal/></div> 
        : cart.length > 0 
        ? cartList 
        : <p className='align_box window_h cart_empty'>Empty cart
          </p>}
    </MainWr>
  )
}

export default Cart