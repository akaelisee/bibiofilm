import React, { useState, useEffect, Fragment} from 'react'
import SignIn from '../Components/signIn';

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
        <Fragment> 
          <SignIn /> 
        </Fragment>
  )
}

export default Login
