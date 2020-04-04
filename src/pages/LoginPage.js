import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/actions/userActions';
import LoginForm from '../components/forms/LoginForm';

function LoginPage() {

  const history = useHistory();
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.user.isLoading);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  useEffect(() => {
      if(isLoggedIn){
          history.push("/");
      }
  }, [isLoggedIn, history])

  function handleFormSubmit(formData) {
      dispatch(loginUser(formData));    
  }

  return (
    <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto">
        <h2 className="my-2 mx-3 text-3xl">Login</h2>
        <LoginForm isLoading={isLoading} onFormSubmit={handleFormSubmit}/>
    </div>
  );
}

export default LoginPage;
