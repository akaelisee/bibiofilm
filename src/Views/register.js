import React, {useState, useContext} from 'react'
import { IconLogo } from '../icons'
import imgGoogle from '../assets/img/google.png'
import { Link } from 'react-router-dom'
import Loader from '../Components/loader'
import SignUp from '../Components/signUp'
import { FirebaseContext } from '../Firebase'

const Register = () => {

  const [isLoader, setIsLoader] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [error, setError] = useState('');
  const firebaseGoogle = useContext(FirebaseContext);

  const handleSubmitSignGoogle = (event) => {
    event.preventDefault();
    
    firebaseGoogle.signInWithGoogle()
    .then(res => {
    })
    .catch(error => {
      setError(error);
    })
  };

  const displayRegister = () => {
    setIsLoader(true)
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      setIsLoader(false)
      setIsModal(true);
    }, 1000);
  }

  const BtnGoogle = <div className='register-google' onClick={handleSubmitSignGoogle}> 
                        <img src={imgGoogle} alt='google'/>
                        <span> Continuer avec Google </span>
                      </div>

    return (
        <div className='register'>
          {isLoader && <Loader />}
          {isModal && 
            <SignUp 
              isModal={isModal} 
              setIsModal={setIsModal}/>
            }
          <div className='register-left'> </div>
          <div className='register-right'>
              <IconLogo /> 
            <div className='register-text'> 
              <h1> 
                <span style={{textTransform: 'capitalize'}}> ça </span>
                 se passe Ici <br /> et maintenant.
              </h1>
              <p> Rejoignez BiblioFilm dès aujourd'hui. </p>
            </div>
            
            {error && <sapn style={{color: 'red'}}> {error.message} </sapn> }

            <div className='btn-register'>

                { BtnGoogle }

                <div className='hr'> ou </div>

                <div className='register-email' onClick={()=>displayRegister()}> 
                    <span> S'inscrire avec un mail </span>
                </div>

                <div className='condition'>
                  En vous inscrivant, vous acceptez les 
                  <span style={{color: '#5e8bce'}}> Conditions d'Utilisation </span>  
                  et la  
                  <span style={{color: '#5e8bce'}}> {' '} 
                    Politique de Confidentialité
                  </span>.
                  incluant l'Utilisation de Cookies.
                </div>

                <p className='text'> Vous avez déjà un compte ? </p>

                <div className='register-connexion'> 
                   <Link to='/auth/login'> Se connecté </Link>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Register
