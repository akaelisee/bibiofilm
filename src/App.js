import './assets/style/index.scss';
import React, {useState, useEffect} from 'react'
import { Routes, Route, Outlet, Navigate} from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from './Views/home'
import Login from './Views/login'
import NoPage from './Views/noPage'
import PagePwdForget from './Views/pagePwdForget'
import Register from './Views/register'
import Content from './Layouts/content';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    
    const auth = getAuth();
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setIsConnected(!!currentUser);
        setIsLoader(false)
    });

    return () => {
      unsubscribe();
    }
  }, []);

  const PrivateRoute = ({connected, children }) => {
    return !connected ? <Content> {children} </Content>  : <Navigate to="/auth/register" />;
  };

  const Auth = () => {
    return (
        <Outlet />
    )
  } 

  return isLoader ? (
    <p> loading... </p>
    ) : (
    <div className="App">
      <Routes> 
        <Route element={ isConnected ? <Navigate to="/" /> : <Auth />}>
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/password-reset' element={<PagePwdForget />} />
        </Route>

        <Route path='/' 
          element={ 
          <PrivateRoute connected={isConnected}>
            <Home />
          </PrivateRoute>
        } />

        <Route path='*' element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;