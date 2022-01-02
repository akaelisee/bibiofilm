import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Times } from '../icons'
import { Logo } from '../Components/logo'

const PasswordForget = () => {
  const navigate = useNavigate();

    return (
        <div className='wrapper-modal'>
        <div className='modal'>
            <div className='modal-content'>
              <div className='modal-header'>
                <div className='btn-close' onClick={()=> navigate('/')}>
                  <span> <Times /> </span> 
                </div>
                <Logo />
              </div>
              <div className='modal-body'> 
                <p className='modal-text'> 
                   Recherchez votre compte BiblioFilm.
                </p>
                <form className='modal-form'>
                  <div className='form'>
                    <input 
                      type="text" 
                      id="email" 
                      className="form__input"
                      placeholder="" 
                    />
                    <label htmlFor='email' className="form__label"> 
                      Entrez votre addresse mail
                    </label>
                  </div>
                </form>

              </div>
              <div className='mdp-forget'>
                <span>Recheche</span>
              </div>
            </div>  
          </div>
       </div>
    )
}

export default PasswordForget
