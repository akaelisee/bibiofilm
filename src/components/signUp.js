import React, { useState, useEffect, useRef, useContext } from 'react'
import { Check, Eye, EyeSlash, Times } from '../icons'
import { Logo } from './logo'
import propTypes from 'prop-types'
import { FirebaseContext } from '../Firebase'
import { useNavigate } from 'react-router-dom';

function SignUp({setIsModal}) {

  // variable
    const data = {
      email: '',
      password: '',
      cpassword: ''
    } 

    const [signData, setSignData] = useState(data); 
    const [error, setError] = useState('')
    const [displayPassword, setDisplayPassword] = useState(false);
    const [displayConfirmPassword, setDisplayConfirmPassword] = useState(false);
    const firebase = useContext(FirebaseContext);
    const refPassword = useRef();
    const refCPassword = useRef();
    const refEmail = useRef();
    const navigate = useNavigate();

    useEffect(() => {
      refEmail.current.focus()
    }, [])

    // validation
    const handleChange = e => {
      e.preventDefault();

      setSignData({...signData, [e.target.id]: e.target.value})
    }

    const handleSubmit = (event) => {
      const {email, password} = signData;
      event.preventDefault();
      
      firebase.signUpUser(email, password)
      .then(user =>{
        setSignData({...data});
        navigate('/auth/login');
      })
      .catch(err => {

        if (err.code === 'email-already-in-use') {
          setError('Vous avez déjà un compte avec cette adresse e-mail.');
        }
        else if (err.code ==='auth/invalid-email') {
          setError('Please provide a valid email');
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

        setSignData({...data});
      })
    }

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

    const ChangeTypeInputConfirmPwd = (type) => {
      if (type === true) {
        setDisplayConfirmPassword(type)
        refCPassword.current.attributes[0].nodeValue = 'text' 
      }
      else {
        setDisplayConfirmPassword(type)
        refCPassword.current.attributes[0].nodeValue = 'password'
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

   const displayBtnEyeConfirmPwd = displayConfirmPassword ? (
        <div style={{cursor: 'pointer'}} onClick={()=> ChangeTypeInputConfirmPwd(false)}>
          <EyeSlash />
        </div>
      ) : (
        <div style={{cursor: 'pointer'}} onClick={()=> ChangeTypeInputConfirmPwd(true)}>
          <Eye />
        </div>
      );
    
  //  close modal
   const closedModal = () => {
      document.body.style.overflow = 'auto'
      setIsModal(false)
   }
  
  const { email, password, cpassword } = signData;

  const ConditionRegister = () => {
    if ( password.length >= 8 && password === cpassword && email.length > 3) {
      return <button className='btn-condition2'> Valider </button>
    }
    else {
      return  <button className='btn-condition1' disabled> Valider </button>
    }
  }

  // style
  const styleBtnDanger = { color: 'red' };
  const styleBtnSuccess = {color: 'green'};
  const styleBtnCondition = password.length >= 8 ? styleBtnSuccess : styleBtnDanger;
  const nombreCharactere =  password.length >= 8 ? <Check /> : <Times />;


    return (
        <div className='wrapper-modal'>
            <div className='modal'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <div className='btn-close' onClick={()=>closedModal()}>
                    <span> <Times /> </span> 
                  </div>
                  <Logo />
                </div>
                
                <p style={{color: 'red'}}> {error} </p>
                <div className='modal-body'> 
                  <p className='modal-text'> 
                    Créer votre compte.
                  </p>
                  <form className='modal-form' onSubmit={handleSubmit}>
                    <div className='first-modal'>
                      <div className='form'>
                        <input 
                          type="text" 
                          id="email" 
                          className="form__input"
                          autoComplete='off'
                          placeholder="" 
                          value={email}
                          onChange={handleChange}
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
                          onChange={handleChange} 
                          ref={refPassword}
                        />
                        <label htmlFor='password' className="form__label"> 
                          Entrez votre mot de passe
                        </label>
                        <div className='eye'> 
                          {displayBtnEyePwd}
                        </div>
                      </div>
                      <div className='form'>
                        <input 
                          type="password" 
                          id="cpassword" 
                          className="form__input"
                          autoComplete='off'
                          placeholder=""
                          value={cpassword}
                          onChange={handleChange} 
                          ref={refCPassword}
                        />
                        <label htmlFor='cpassword' className="form__label"> 
                          Confirmez votre mot de passe
                        </label>
                        
                        <div className='eye'> 
                          {displayBtnEyeConfirmPwd}
                        </div>
                      </div>
                      <div className='condition-pwd'> 
                        <span className='condition-register' style={styleBtnCondition}> 
                          { nombreCharactere } 8 charactéres
                        </span>
                      </div>
                    </div>

                    <div className='btn-link'>
                      <ConditionRegister />
                    </div>
                  </form>
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
