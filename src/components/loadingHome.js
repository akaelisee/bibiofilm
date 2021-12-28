import React from 'react'
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
