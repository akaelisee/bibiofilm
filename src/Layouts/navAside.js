import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import { 
    faHome,
    faCity,
    faCompass,
    faCog,
    faSignOutAlt,
    faUser,
    faCompactDisc
} from '@fortawesome/free-solid-svg-icons'
import { Logo } from '../Components/logo';
import { Link } from 'react-router-dom';
import DarkLight from '../Components/darkLight';

const NavAside = () => {

  React.useEffect(() => {

    const navbar = document.querySelectorAll(".menu__item-ul li");

    navbar.forEach((item) => {
      item.addEventListener('click', (e) => {
        navbar.forEach(element => element.classList.remove('active'));

        item.classList.add('active');
      })
    });
  }, []);

  return (
    <div className='nav__aside'>
      <div className='nav__aside-logo'> 
        <Logo />
      </div>

      <div className='menu'>
        <ul className='menu__item'> 
          <li> 
            <span> Menu </span>
            <ul className='menu__item-ul'> 
                <li className='active'>
                  <Link to='#'> 
                    <FontAwesomeIcon icon={faHome} />
                    <span> Home </span>
                  </Link>
                </li>
                <li className=''> 
                  <Link to='#'> 
                    <FontAwesomeIcon icon={faCity} />
                    <span> Community </span>
                  </Link>
                </li>
                <li className=''> 
                  <Link to='#'> 
                    <FontAwesomeIcon icon={faCompass} />
                    <span> Discovery </span>
                  </Link>
                </li>
            </ul>
          </li>
        </ul>
        <ul className='menu__item'> 
          <li> 
            <span> Social </span>
            <ul className='menu__item-ul'> 
                <li className=''> 
                  <Link to='#'> 
                    <FontAwesomeIcon icon={faUser} />
                    <span> Friends </span>
                  </Link>
                </li>
                <li className=''> 
                  <Link to='#'> 
                    <FontAwesomeIcon icon={faCompactDisc} />
                    <span> Media </span>
                  </Link>
                </li>
            </ul>
          </li>
        </ul>
        <ul className='menu__item'> 
          <li> 
            <span> General </span>
            <ul className='menu__item-ul'> 
                <li className=''> 
                  <Link to='#'> 
                    <FontAwesomeIcon icon={faCog} />
                    <span> Setting </span>
                  </Link>
                </li>
                <li className=''> 
                  <Link to='#'> 
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span> Sign out </span>
                  </Link>
                </li>
            </ul>
          </li>
        </ul>
        <DarkLight />
      </div>
    </div>
  ); 
};

export default NavAside;
