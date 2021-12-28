import React, {useEffect} from 'react'
import imgCookie from '../assets/img/cookie.png'

const Cookie = () => {
    
    useEffect(() => {
        let checkCookie = document.cookie.indexOf("CookieBy=bibliofilmCookie");

        checkCookie !== -1 ? document.querySelector('.cookie-content').classList.add("hide") 
            : document.querySelector('.cookie-content').classList.remove("hide");
    }, [])
    
    const handleClick = () => {
        
        const cookieBox = document.querySelector('.cookie-content');
        document.cookie = "CookieBy=bibliofilmCookie; max-age="+60*60*24*30;

        if (document.cookie) {
            cookieBox.style.transition = 'transition: all 0.3s ease';
            cookieBox.classList.add('hide');
        } else {
            alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
        }        
    }

    return (
        <div className='cookie-content'>
          <img src={imgCookie} alt='imgCookie' />

          <div className='content'>
            <h3>Cookies Consent</h3>
            <p>This website use cookies to ensure you get the best experience on our website.</p>

            <div className="btn-cookie">
              <button className='item' onClick={()=>handleClick()}> I understand</button>
              <span className="item btn-a"> Learn more</span>
            </div>
          </div>
        </div>
    )
}

export default Cookie
