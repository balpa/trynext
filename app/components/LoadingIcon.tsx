import React from 'react'
import Image from 'next/image'
import Icon from '../assets/white-loading-icon.png'

const LoadingIcon = () => {
  return (
    <Image
        className='logo-animation'
        width={35}
        height={35}
        src={Icon}
        alt='' />
  )
}

export default LoadingIcon