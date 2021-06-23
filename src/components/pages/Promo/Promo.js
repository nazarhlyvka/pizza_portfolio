import React from 'react'
import { useSelector } from 'react-redux'
import MainWr from '../Wrapper/MainWr'
import PromoItem from './PromoItem'
import './Promo.scss'

const Promo = () => {
  const pizza = useSelector(state => state.promo.promo)

  return(
    <MainWr>
      <ul className='align_box promo_list'>
        <PromoItem detail={pizza}/>
      </ul>
    </MainWr>
  )
}

export default Promo