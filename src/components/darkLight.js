import React from 'react'
import { Moon, Sun } from '../icons'


const DarkLight = () => {

    const handleChangeDark = () => {
        document.body.classList.toggle('dark');
    }

    return (
          <div className='darkmark'> 
            <input 
               type="checkbox" 
               className='checkbox' 
               id="chk" 
               onChange={()=> handleChangeDark()
             }/>
             <label className="label-dark" htmlFor='chk'>
                <Moon /> <Sun />
                <div className="ball"></div>
            </label>
          </div>
    )
}

export default DarkLight
