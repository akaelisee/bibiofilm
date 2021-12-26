import React from 'react'
import imgHome from '../assets/img/img-home.jpg'
import { LogoLoading } from './logo'

const LoadingHome = () => {
    return (
        <div className='loading__home'>
          <div className='loading__home__text'>
            <LogoLoading />
            <div className='bar'>
              <div className='progress-bar'> </div> 
            </div>
          </div>
        </div>
    )
}

export default LoadingHome
