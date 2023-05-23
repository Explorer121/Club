import React from 'react'
import CityLogo from '../../Utils/tools'
// import ImagLogo from '../Resources/images/logos/manchester_city_logo.png'



const Footers = () => {
  return (
    <footer className='bck_blue'>
      <div className='footer_logo'>
      <CityLogo
        link={true}
        linkTo={'/'}
        width="70px"
        height="70px"
      />
      </div>
      <div className='footer_discl'>
        Manchester City {new Date().getFullYear()}. All rights reserved
      </div>
    </footer>
  )
}

export default Footers