import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Loader from './loader';
import { Logo } from './logo'
import PasswordForget from './passwordForget';
import { IconLogo, Times } from '../icons';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [isLoader, setIsLoader] = useState(false);
    
    const navigate = useNavigate();
    
    useEffect(() => {
        if (email.length >= 1 && password.length >= 8) {
          setBtn(true);
        }else {
          setBtn(false);
        }
    }, [email, btn, password]);

    const displayPassordForget = () => {
        setIsLoader(true)
        setTimeout(() => {
          navigate('/password_rest');
        }, 1000);
      }
      
      const displayLink = btn ? (
        <div className='btn-link'>
          <Link to='/'>Connexion</Link>
        </div> 
      ) : (
        <div className='mdp-forget' onClick={()=>displayPassordForget()}>
          <span> Mot de passe oublié ?</span>
        </div>
      )

    return (
        <div className='wrapper-modal'>
        <div className='modal'>
          <div className='modal-content'>
            { isLoader && <Loader /> }
            <div className='modal-header'>
              <div className='btn-close' onClick={()=>navigate('/')}>
                <span> <Times /> </span> 
              </div>
              <Logo />
            </div>
            <div className='modal-body'> 
              <p className='modal-text'> 
                Pour commencer, entrez votre numéro de téléphone, 
                votre adresse email.
              </p>
              <form  className='modal-form'>
                <div className='form'>
                  <input 
                    type="text" 
                    id="email" 
                    autoComplete='off'
                    className="form__input"
                    placeholder="" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor='email' className="form__label"> 
                    Entrez votre addresse mail
                  </label>
                </div>
                <div className='form'>
                  <input 
                    type="password" 
                    id="password" 
                    className="form__input"
                    autoComplete='off'
                    placeholder="" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor='password' className="form__label"> 
                    Entrez votre mot de passe
                  </label>
                </div>
              </form>
            </div>

            { displayLink }
            
          </div>  
        </div>
     </div>
    )
}

export default SignIn
