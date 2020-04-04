import React, { useState } from 'react';

function LoginForm({ isLoading, onFormSubmit }) {

    const handleChange = e => {
        const {name, value} = e.target
        setValues({...loginForm, [name]: value});
    }

    const [loginForm, setValues] = useState({Email: '', Password: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(loginForm);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="p-2">
                <label htmlFor="login-email" className="w-full">
                    Email
                </label>
                <input type="email" 
                            required
                            name="Email" 
                            id="login-email" 
                            className="p-2 border border-gray-200 bg-gray-200 focus:bg-white 
                                        focus:border-black rounded w-full"
                            value={loginForm.Email}
                            onChange={handleChange} />
            </div>
            <div className="p-2">
                <label htmlFor="login-password" className="w-full">
                    Password
                </label>
                <input type="password" 
                            required
                            name="Password" 
                            id="login-password" 
                            className="p-2 border border-gray-200 bg-gray-200 focus:bg-white 
                                        focus:border-black rounded w-full"
                            value={loginForm.Password}
                            onChange={handleChange} />
            </div>
            <div className="p-2">
                <button type="submit" 
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
                                    px-4 rounded focus:outline-none border border-blue-500 focus:bg-white 
                                    focus:text-blue-500 focus:shadow-outline">
                    {isLoading && <span>Loading...</span>}
                    {!isLoading && <span>Submit</span>}
                </button>
            </div>
        </form>
    );
}

export default LoginForm;
