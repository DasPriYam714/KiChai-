import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace this with your actual login logic (e.g., display a success/error message)
    console.log('username:', username);
    console.log('password:', password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md px-10 py-8">
        <img
          src="./logo.png" // Replace with your image path
          alt="Login page image"
          className="w-20 h-20 mx-auto mb-6"
        />
        <h1 className="text-2xl font-bold text-center mb-6">KI CHAL!?</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="text-sm text-gray-700 font-medium block mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-sm text-gray-700 font-medium block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-offset-white focus:ring-2 focus:ring-offset-2 dark:bg-gray-700"
              />
              <label htmlFor="remember-me" className="text-sm text-gray-700 ml-2">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-primary-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-offset-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
