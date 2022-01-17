import React, { useState, useEffect, useRef, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from './loader';
import { Logo } from './logo';
import { Times, Eye, EyeSlash } from '../icons';
import { FirebaseContext } from '../Firebase';


const SignIn = () => {

    const data = {
      email: '',
      password: ''
    }
    const [signInData, setSignInData] = useState(data);
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('')
    const [isLoader, setIsLoader] = useState(false);
    const refEmail = useRef(null);
    const navigate = useNavigate();
    const refPassword = useRef();
    const [displayPassword, setDisplayPassword] = useState(false);
    const firebase = useContext(FirebaseContext)
    
    useEffect(() => {  
        if (signInData.email.length >= 1 && signInData.password.length >= 8) {
          setBtn(true);
        }else {
          setBtn(false);
        }
    }, [signInData, btn]);

    const {email, password } = signInData;

    const handleChangeSignIn = (e) => {
      setSignInData({...signInData, [e.target.id]: e.target.value });
    }

    const handleSubmitSignIn = (e) => {
      e.preventDefault();
      firebase.signInUser(email, password)
      .then(res => {
        setSignInData({...data})
        navigate('/', {replace: true});

      }).catch(err => {
        if (err.code === 'auth/too-many-requests') {
          setError('Thrown if requests are blocked from a device due to unusual activity. Trying again after some delay would unblock')
        }
        else if (err.code ==='auth/invalid-email') {
          setError('Please provide a valid email')
        } 
        else if (err.code === 'auth/weak-password') {
          setError('Le mot de passe est trop faible');
        }
        else if (err.code === 'auth/wrong-password') {
          setError('Mauvais mot de passe. Veuillez réessayer');
        } 
        else if (err.code === 'auth/user-not-found') {
          setError('Utilisateur introuvable');
        }
        else {
          setError(err.message)
        }

        setSignInData({...data})
      })
    }

    const displayPassordForget = () => {
        setIsLoader(true)
        setTimeout(() => {
          navigate('/auth/password-reset');
        }, 1000);
      }
      
      const displayLink = btn ? (
        <div className='btn-link'>
          <button className='btn-condition2'> Connexion </button>
        </div> 
      ) : (
        <div className='mdp-forget' onClick={()=>displayPassordForget()}>
          <span> Mot de passe oublié ?</span>
        </div>
      )

      // change type password and Cpassword
    const ChangeTypeInputPwd = (type) => {
      if (type === true) {
        setDisplayPassword(type)
        refPassword.current.attributes[0].nodeValue = 'text' 
      }
      else {
        setDisplayPassword(type)
        refPassword.current.attributes[0].nodeValue = 'password'
      } 
    }

    // display btn
    const displayBtnEyePwd = displayPassword ? (
        <div style={{cursor: 'pointer'}} onClick={()=> ChangeTypeInputPwd(false)}>
         <EyeSlash />
        </div>
      ) : (
        <div style={{cursor: 'pointer'}} onClick={()=> ChangeTypeInputPwd(true)}>
          <Eye />
        </div>
      );

    return (
        <div className='wrapper-modal'>
        <div className='modal'>
          <div className='modal-content'>
            { isLoader && <Loader /> }
            <div className='modal-header'>
              <div className='btn-close' onClick={()=> navigate('/auth/register')}>
                <span> <Times /> </span> 
              </div>
              <Logo />
            </div>
            <div className='modal-body'> 
              <p className='modal-text'> 
                Pour commencer, entrez votre numéro de téléphone, 
                votre adresse email.
              </p>
              <p style={{marginTop: '5px', color: 'red'}}> {error} </p>
              <form  className='modal-form' onSubmit={handleSubmitSignIn}>
                <div className='first-modal'>
                  <div className='form'>
                    <input 
                      type="email" 
                      id="email" 
                      autoComplete='off'
                      className="form__input"
                      placeholder="" 
                      value={email}
                      onChange={handleChangeSignIn}
                      ref={refEmail}
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
                      value={password}
                      onChange={handleChangeSignIn}
                      ref={refPassword}
                    />
                    <label htmlFor='password' className="form__label"> 
                      Entrez votre mot de passe
                    </label>
                    <div className='eye'> 
                      {displayBtnEyePwd}
                    </div>
                  </div>
                </div>

                { displayLink }

              </form>
            </div>            
          </div>  
        </div>
     </div>
    )
}

export default SignIn
