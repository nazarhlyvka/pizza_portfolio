import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { closeOutModal, closeSuccessModal } from '../../store/Modal'
import { closeOrderSuccess } from '../../store/Order'
import './SuccessModal.scss'

const SuccessModal = () => {
  const successModal = useSelector(state => state.modal.successModal)
  const dispatch = useDispatch()

  const closeSuccess = () => {
    dispatch(closeOutModal())
    dispatch(closeSuccessModal())
    dispatch(closeOrderSuccess())
  }

  return(
    <div className={successModal ? 'success_modal effect' : 'success_modal'}>
      <p>Operator will callback for 1 minute</p>
      <button className='btn' onClick={closeSuccess}>Ok</button>
    </div>
  )
}

export default SuccessModal