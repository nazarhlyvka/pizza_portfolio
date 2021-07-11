import React, { memo } from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import payment from '../../assets/pngegg.png'
import './Footer.scss'

const Footer = () => {
  return(
    <footer className='footer'>
      <div className='footer_wr align_box'>
        <div className='footer_info'>
          <div className='info_contacts'>
            <div><LocationOnIcon/><a target="blanc" href='https://www.google.com/maps?q=%D1%87%D0%BE%D1%80%D0%BD%D0%BE%D0%B2%D0%BE%D0%BB%D0%B0&um=1&ie=UTF-8&sa=X&ved=2ahUKEwju2MnO9qjxAhUF2SoKHduvCnoQ_AUoAXoECAIQAw'>Chornovola St. 999</a></div>
            <div><PhoneIcon/> 380-96-56-78-576</div>
            <div><MailIcon/><a href='mailto:support@pizzao.com'>support@pizzao.com</a></div>
          </div>
          <div className='info_payment'>
            <img src={payment} alt='payment'/>
          </div>
          <div className='info_social'>
            <a href='https://www.instagram.com/' target='blanc'>
              <IconButton>
                <InstagramIcon fontSize='large'/>
              </IconButton>
            </a>
            <a href='https://www.facebook.com/' target='blanc'>
              <IconButton>
                <FacebookIcon fontSize='large'/>
              </IconButton>
            </a>
            <a href='https://www.pinterest.com/' target='blanc'>
              <IconButton>
                <PinterestIcon fontSize='large'/>
              </IconButton>
            </a>
          </div>
        </div>
      </div>
      <div className='footer_rights mb20px'>
        <p className='rights align_box'>&copy; 2010 - 2021 Copyright  All Rights Reserved by Pizzao</p>
      </div>
    </footer>
  )
}

export default memo(Footer)