import React from 'react'
import MainWr from '../Wrapper/MainWr'
import Carousel from './Carousel'

import './Main.scss'

const Main = () => {
  return(
    <MainWr>
      <div className='align_box carousel_box'>
        <Carousel/>
      </div>
      <div className='main_info align_box'>
        <div>
          <div className='info_img_wr'>
            <img src="https://img.icons8.com/carbon-copy/100/ffffff/scooter.png" alt='scooter delivery'/>
          </div>
          <p>Delivery up to 30 minutes if more than one pizza is free.</p>
        </div>
        <div>
          <div className='info_img_wr'>
            <img src="https://img.icons8.com/dotty/80/ffffff/discount-ticket.png" alt='promo icon'/>
          </div>
          <p>If you buy three pizzas, the fourth as a gift.</p>
        </div>
        <div>
          <div className='info_img_wr'>
            <img src="https://img.icons8.com/dotty/80/ffffff/mobile-payment.png" alt='payment icon'/>
          </div>
          <p>Payment upon receipt, cash or card.</p>
        </div>
      </div>
    </MainWr>
  )
}

export default Main