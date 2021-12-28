import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export const IconLogo = () => {
    return <FontAwesomeIcon icon={faPhotoVideo} className='logo__icon'/>
}

export const Moon = () => {
    return (
        <div className='fa-moom'>
            <FontAwesomeIcon icon={faMoon}/>
        </div>
    )
}

export const Sun = () => {
    return (
        <div className='fa-sun'>
            <FontAwesomeIcon icon={faSun}/>
        </div>
    )
}

