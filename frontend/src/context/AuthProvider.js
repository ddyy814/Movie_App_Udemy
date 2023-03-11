import React, { createContext, useState } from 'react'
import { signInUser } from '../api/auth';


const AuthContext = createContext();
const defaultAuthInfo = {
    profile: null,
    isLoggedIn: false,
    isPending: false,
    error: ''
}

export default function AuthProvider({children}) {

    const [authInfo, setAuthInfo] = useState({...defaultAuthInfo});

    const handleLogin = async (email, password) => {
        setAuthInfo({...authInfo, isPending: true});
        const {error, user} = await signInUser({email, password});
        if(error) {}
    }

  return (
    <AuthContext.Provider value={{authInfo, handleLogin, handleLogout, isAuth}}>
        {children}
    </AuthContext.Provider>
  )
}