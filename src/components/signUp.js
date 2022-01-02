import React, {useState, useEffect} from 'react'
import { Times } from '../icons'
import { Logo } from './logo'
import propTypes from 'prop-types'

function SignUp({setIsModal}) {
    const [isDisplay, setIsDisplay] = useState();

    useEffect(() => {
       
    }, [])

    return (
        <div className='wrapper-modal'>
            <div className='modal'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <div className='btn-close' onClick={()=>setIsModal(false)}>
                    <span> <Times /> </span> 
                  </div>
                  <Logo />
                </div>
                <div className='modal-body'> 
                  <p className='modal-text'> 
                    Créer votre compte.
                  </p>
                  <form className='modal-form'>
                    <div className='form'>
                      <input 
                        type="text" 
                        id="email" 
                        className="form__input"
                        autoComplete='off'
                        placeholder="" 
                      />
                      <label htmlFor='email' className="form__label"> 
                        Entrez votre addresse mail
                      </label>
                    </div>
                    <div className='form'>
                      <input 
                        type="password" 
                        id="email" 
                        className="form__input"
                        autoComplete='off'
                        placeholder="" 
                      />
                      <label htmlFor='email' className="form__label"> 
                        Entrez votre mot de passe
                      </label>
                    </div>
                    <div className='condition-pwd'> 
                        8 charactéres 
                    </div>
                  </form>

                </div>
                <div className='btn-link'>
                  <span style={{color: '#fff'}}> Valider </span>
                </div>
              </div>  
            </div>
        </div>
    )
}

SignUp.prototype = {
    setIsModal: propTypes.func
}

export default SignUp
