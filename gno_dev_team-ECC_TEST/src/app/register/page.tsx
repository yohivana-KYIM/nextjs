'use client'
import { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
//import RegisterSucess from '@/components/message/RegisterSucess';
//import useAuth from '@/composables/useAuth';
import { Eye as EyeIcon, EyeOff as EyeOffIcon } from 'react-feather';
import Link from 'next/link';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    lastname: '',
    email: '',
    password: '',
    parish_official: false,
    user_type: 'faithful',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFinish, setIsFinished] = useState(false);
  const [errors, setErrors] = useState([]);
  //nst { createUser, isFinish, cleanErrors } = useAuth();
  const roles = [
    { id: 'faithful', name: 'Fidele' },
    { id: 'prayerGroup', name: 'Groupe de prière' },
    { id: 'parish', name: 'Paroisse' },
    { id: 'diocese', name: 'Diocèse' },
    { id: 'seat', name: 'Siège' },
  ];

  const register = async () => {
    //await createUser({ ...user });
  };

  return (
    <div className="w-full bg-slate-100 relative">
      <div className="w-full h-full bg-[url('/images/abt.jpg')] bg-cover bg-center">
        <div className="bg-black/50 w-full h-full min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center">
            <h1 className="font-bold lg:text-3xl text-2xl text-white">Rejoindre la communauté</h1>
            <h1 className="font-semibold lg:text-xl text-lg text-center tracking-tight text-white my-4">Inscrivez-vous et rejoignez la communauté chrétienne céleste.</h1>
          </div>
          <div className="flex flex-col items-center justify-center p-3 w-full max-w-xl bg-white shadow-md rounded-lg my-8">
           {/*<Error errors={errors} cleanErrors={cleanErrors} />*/}
            {isFinish ? '<RegisterSucess />' : (
              <form onSubmit={register} className="flex flex-col w-full py-3 px-4">
                <div className="w-full">
                  <label>Type de profil</label>
                  <select
                    value={user.user_type}
                    onChange={(e) => setUser({ ...user, user_type: e.target.value })}
                    className="form-select p-2 outline-blue-500 mt-1 border block border-gray-300 rounded-lg shadow-sm w-full"
                  >
                    {roles.map((role) => (
                      <option key={role.id} value={role.id}>{role.name}</option>
                    ))}
                  </select>
                </div>
                <div className="w-full mt-3">
                  <label>
                    {user.user_type === 'faithful' ? 'Nom du Fidele' : user.user_type === 'parish' ? 'Nom de la Paroisse' : user.user_type === 'prayerGroup' ? 'Nom du groupe de prière' : user.user_type === 'diocese' ? 'Nom du diocèse' : 'Nom du Siège'}
                  </label>
                  <input
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    className="border-gray-300 mt-1 border form-input p-2 outline-blue-500 block rounded-lg shadow-sm w-full"
                    type="text"
                    placeholder="Ex: Marc"
                  />
                </div>
                {user.user_type === 'faithful' && (
                  <div className="w-full mt-3">
                    <label>Prénom du Fidele</label>
                    <input
                      value={user.lastname}
                      onChange={(e) => setUser({ ...user, lastname: e.target.value })}
                      className="border-gray-300 mt-1 border form-input p-2 outline-blue-500 block rounded-lg shadow-sm w-full"
                      type="text"
                      placeholder="Ex: Emmanuel"
                    />
                  </div>
                )}
                {user.user_type === 'faithful' && (
                  <div className="w-full mt-3">
                    <label>Chargé paroissial</label>
                    <div className="flex mt-1 items-center space-x-2">
                      <input
                        type="radio"
                        className="form-radio border-gray-300"
                        id="yes"
                        value="true"
                        checked={user.parish_official}
                        onChange={() => setUser({ ...user, parish_official: true })}
                      />
                      <label htmlFor="yes">Oui</label>
                      <input
                        type="radio"
                        className="form-radio border-gray-300"
                        id="no"
                        value="false"
                        checked={!user.parish_official}
                        onChange={() => setUser({ ...user, parish_official: false })}
                      />
                      <label htmlFor="no">Non</label>
                    </div>
                  </div>
                )}
                <div className="w-full mt-3">
                  <label>Adresse mail</label>
                  <input
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                      className="border-gray-300 border form-input p-2 pr-10 outline-blue-500 block rounded-lg shadow-sm w-full"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="8+ caracteres"
                    />
                    <span className="absolute top-3 right-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOffIcon className="w-5 h-5 text-gray-500" /> : <EyeIcon className="w-5 h-5 text-gray-500" />}
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="p-2 mt-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 disabled:bg-blue-300 text-white font-semibold cursor-pointer flex items-center justify-center"
                >
                  {loading ?' <Spin />' : <span>S'inscrire</span>}
                </button>
                <p className="mt-4 text-sm text-center">Déjà un compte ? <Link href="/login" className="text-blue-500 hover:underline">Connectez vous</Link></p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
