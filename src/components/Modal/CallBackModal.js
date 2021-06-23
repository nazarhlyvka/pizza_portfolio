import React from 'react'
import { useSelector } from 'react-redux'
import OutModal from './OutModal'
import Form from './Form'
import SuccessModal from './SuccessModal'

const CallBackModal = () =>  {
  const {outModal, callBackModal, successModal} = useSelector(state => state.modal)
  return(
    <>
      {outModal && <OutModal/>}
      {callBackModal && <div className='modal_align_wr'><Form btnName='Call me'/></div>}
      {successModal && <div className='fix_success' ><SuccessModal/></div>}
    </>
  )
}

export default CallBackModal