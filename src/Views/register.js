import React, {useState} from 'react'
import { IconLogo } from '../icons'
import imgGoogle from '../assets/img/google.png'
import { Link } from 'react-router-dom'
import Loader from '../Components/loader'
import SignUp from '../Components/signUp'

const Register = () => {

  const [isLoader, setIsLoader] = useState(false)
  const [isModal, setIsModal] = useState(false)

  const displayRegister = () => {
    setIsLoader(true)

    setTimeout(() => {
      setIsLoader(false)
      setIsModal(true);
    }, 1000);
  }

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

            <div className='btn-register'>
                <div className='register-google'> 
                    <img src={imgGoogle} alt='google'/>
                    <span> S'inscrire avec Google </span>
                </div>

                <div className='hr'> ou </div>

                <div className='register-email' onClick={()=>displayRegister()}> 
                    <span> S'inscrire avec un mail </span>
                </div>

                <div className='condition'>
                  En vous inscrivant, vous acceptez les 
                  <span style={{color: '#5e8bce'}}> Conditions d'Utilisation </span>  
                  et la 
                  <span style={{color: '#5e8bce'}}> 
                    Politique de Confidentialité
                  </span>.
                  incluant l'Utilisation de Cookies.
                </div>

                <p className='text'> Vous avez déjà un compte ? </p>

                <div className='register-connexion'> 
                   <Link to='/login'> Se connecté </Link>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Register
