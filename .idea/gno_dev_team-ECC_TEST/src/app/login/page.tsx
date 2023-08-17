'use client'

import { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import Link from 'next/link';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const cleanErrors = () => {
    setErrors([]);
  };

  const login = async () => {
    // Logic for login functionality
  };

  return (
    <div className="w-full bg-slate-100 relative">
      <div className="w-full h-full bg-[url('/images/abt.jpg')] bg-cover bg-center">
        <div className="bg-black/50 z-10 w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center">
            <h1 className="font-bold lg:text-3xl text-2xl text-white">
              Connectez-vous à votre compte
            </h1>
            <h3 className="flex flex-col items-center text-white text-base my-1">
              Ou{' '}
              <Link legacyBehavior href="/register">
                <a className="text-blue-500 ml-2 hover:underline">
                  Inscrivez vous et rejoignez la communauté.
                </a>
              </Link>
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center p-3 w-full max-w-xl bg-white shadow-md rounded-lg my-8">
            {/* Error component */}
            {errors.length > 0 && (
              <div className="my-4">
                {errors.map((error, index) => (
                  <p key={index} className="text-red-500">
                    {error}
                  </p>
                ))}
              </div>
            )}

            <form
              className="flex flex-col w-full py-3 px-4"
              onSubmit={(e) => {
                e.preventDefault();
                login();
              }}
            >
              <div className="w-full">
                <label>Adresse mail</label>
                <input
                  value={user.email}
                  onChange={(e) =>
                    setUser({ ...user, email: e.target.value })
                  }
                  className="border-gray-300 border form-input p-2 mt-1 outline-blue-500 block rounded-lg shadow-sm w-full"
                  type="email"
                  placeholder="Ex: nom@xyz.com"
                />
              </div>
              <div className="w-full mt-3">
                <label>Mot de passe</label>
                <div className="relative mt-1">
                  <input
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    className="border-gray-300 border form-input p-2 pr-10 block outline-blue-500 rounded-lg shadow-sm w-full"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="8+ caracteres"
                  />
                  <span
                    className="absolute top-3 right-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? (
                      <Eye className="w-5 h-5 text-gray-500" />
                    ) : (
                      <EyeOff className="w-5 h-5 text-gray-500" />
                    )}
                  </span>
                </div>
              </div>
              <div className="flex w-full justify-between my-5">
                <a href="#" className="text-blue-600">
                  Mot de passe oublié ?
                </a>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="p-2 mt-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 disabled:bg-blue-300 text-white font-semibold cursor-pointer flex items-center justify-center"
              >
                {loading ? (
                  <span>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647zm10-10.582A7.963 7.963 0 0120 12h-4c0-3.314-2.018-6.153-4.899-7.374l3.799-1.648z"
                      ></path>
                    </svg>
                    Se Connecter
                  </span>
                ) : (
                  <span>Se Connecter</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
