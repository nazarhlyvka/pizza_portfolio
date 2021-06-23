import React from 'react'
import { useSelector } from 'react-redux'
import MainWr from '../Wrapper/MainWr'
import DrinkItem from './DrinkItem'
import './Drinks.scss'

const Drinks = () => {
  const drinks = useSelector(state => state.drinks.drinks)

  return(
    <MainWr>
      <ul className='align_box drinks_list'>
        <DrinkItem detail={drinks}/>
      </ul>
    </MainWr>
  )
}

export default Drinks
