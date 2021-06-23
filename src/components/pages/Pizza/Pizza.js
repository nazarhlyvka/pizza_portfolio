import React from 'react'
import { useSelector } from 'react-redux'
import MainWr from '../Wrapper/MainWr'
import PizzaItem from './PizzaItem'
import './Pizza.scss'

const Pizza = () => {
  const pizza = useSelector(state => state.pizza.pizza)

  return(
    <MainWr>
      <ul className='align_box pizza_list'>
        <PizzaItem detail={pizza}/>
      </ul>
    </MainWr>
  )
}

export default Pizza