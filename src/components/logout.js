import React, { useContext } from 'react'
import { FirebaseContext } from '../Firebase'

const Logout = () => {

    const firebase = useContext(FirebaseContext);

    const handleClick = ()=> {
        firebase.signOutUser();
    }

    return (
        <div>
            <button onClick={handleClick}> Logout </button>
        </div>
    )
}

export default Logout
