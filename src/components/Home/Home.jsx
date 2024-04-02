import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const Home = () => {
      const user = useContext(authContext)
      console.log(user);
      return (
            <div>
                  <h2>this is Home section</h2>
            </div>
      );
};

export default Home;