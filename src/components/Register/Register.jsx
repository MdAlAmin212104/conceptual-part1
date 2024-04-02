import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Register = () => {
      const [error, setError] = useState('');     
      const { registerUser } = useContext(authContext)
      
      
      const handleRegisterSubmit = (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            const passwordConfirmation = e.target.ConfirmPassword.value;
            setError('')  

            
            if (password.length < 6) {
                  setError("password must be at least 6 characters");
                  return;
            }
            else if (password !== passwordConfirmation) {
                  setError("password con't match");
                  return;
            }


           
            
            registerUser(email, password);
            



            
      }


      return (
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-50 mx-auto mt-10">
                  <h1 className="text-2xl font-bold text-center">Register</h1>
                  <form onSubmit={handleRegisterSubmit} className="space-y-6">
                        <div className="space-y-1 text-sm">
                              <label htmlFor="username" className="block text-gray-50">Email</label>
                              <input type="email" name="email" id="username" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-900" />
                        </div>
                        <div className="space-y-1 text-sm">
                              <label htmlFor="password" className="block text-gray-60">Password</label>
                              <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-900 " />
                        </div>
                        <div className="space-y-1 text-sm">
                              <label htmlFor="ConfirmPassword" className="block text-gray-60">Confirm Password</label>
                              <input type="password" name="ConfirmPassword" id="password" placeholder="Confirm password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-900 " />
                        </div>
                        {
                              error && <p className="text-red-600 text-center">{ error }</p>
                        }
                        <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Register</button>
                  </form>
                  
                  <p className="text-xs text-center sm:px-6 dark:text-gray-600">Your have an account?
                        <Link to="/login" rel="noopener noreferrer" className="underline dark:text-gray-800">Login</Link>
                  </p>
            </div>
      );
};

export default Register;