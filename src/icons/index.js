import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import { 
    faMoon, 
    faSun,
    faTimes,
    faEye,
    faEyeSlash,
    faCheck,
    faHome,
    faCity,
    faCompass,
    faCog,
    faSignOutAlt,
    faPlus,
} from '@fortawesome/free-solid-svg-icons'

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


export const Times = () => {
    return (
        <div className='fa-times'>
            <FontAwesomeIcon icon={faTimes}/>
        </div>
    )
}

export const Eye = () => {
    return (
        <div className='fa-eye'>
            <FontAwesomeIcon icon={faEye}/>
        </div>
    )
}

export const EyeSlash = () => {
    return (
        <div className='fa-eye'>
            <FontAwesomeIcon icon={faEyeSlash}/>
        </div>
    )
}


export const Check = () => {
    return (
        <div className='fa-check'>
            <FontAwesomeIcon icon={faCheck}/>
        </div>
    )
}