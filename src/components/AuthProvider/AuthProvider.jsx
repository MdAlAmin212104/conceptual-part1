import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase/firebase_init';

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
      
      const registerUser = (email, password) => {
            createUserWithEmailAndPassword(auth, email, password)
                  .then(result => {
                        console.log(result.user);
                  })
                  .catch(error => {
                        console.log(error.message);
                  })
      }

      const loginUser = (email, password) => {
            signInWithEmailAndPassword(auth, email, password)
                  .then(result => console.log(result.user))
                  .catch(error => console.log(error.message))
      }


      const authInfo = {
            registerUser,
            loginUser,
      }


      return (
            <div>
                  <authContext.Provider value={authInfo}>
                        {children}
                  </authContext.Provider>
            </div>
      );
};

export default AuthProvider;