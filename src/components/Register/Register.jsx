import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
      
      const handleRegisterSubmit = (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
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
                        <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Register</button>
                  </form>
                  
                  <p className="text-xs text-center sm:px-6 dark:text-gray-600">Your have an account?
                        <Link to="/login" rel="noopener noreferrer" className="underline dark:text-gray-800">Login</Link>
                  </p>
            </div>
      );
};

export default Register;