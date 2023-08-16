"use client";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@/app/components/icons/index";
import Link from "next/link";
import { Search } from "react-feather";

interface User {
  name: string;
  username: string;
  email: string;
  id: number;
  avatar: string | null;
}

interface AuthData {
  user: User | null;
  token: string | null;
}

const SiteNavigation: React.FC = () => {
  const auth: AuthData = {
    //  user: { name: 'German', username: 'Hello', email: 'yimhelgerman@gmail.com', id: 2, avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y' },
    // token: '123456789',
    user: null,
    token: null,
  };

  const [open, setOpen] = useState<{
    menu: boolean;
    submenu: {
      publication: boolean;
      profil: boolean;
      multimedia: boolean;
      cantiques: boolean;
      document: boolean;
    };
  }>({
    menu: false,
    submenu: {
      publication: false,
      profil: false,
      multimedia: false,
      cantiques: false,
      document: false,
    },
  });

  const [subMenu, setSubMenu] = useState<{
    publication: boolean;
    profil: boolean;
    multimedia: boolean;
    cantiques: boolean;
    document: boolean;
  }>({
    publication: false,
    profil: false,
    multimedia: false,
    cantiques: false,
    document: false,
  });

  return (
    <div>
      <header className="relative bg-white text-zinc-500 w-full h-auto shadow">
        <div className="flex justify-between items-center sm:px-6 px-4 py-4">
          <div className="lg:w-2/6">
            <Link legacyBehavior href="/">
              <div className="inline-flex items-center">
                <div className="lg:h-14 h-12">
                  <img
                    src="./images/LOGO.png"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="font-bold xl:text-xl text-sm text-gray-800">
                  Eglise du Christianisme Céleste
                </h1>
              </div>
            </Link>
          </div>

          <div className="relative w-2/6 lg:block hidden">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-red-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300"
              placeholder="Search"
            />
          </div>

          {!auth.user && !auth.token && (
            <div className="lg:flex xl:text-base text-sm hidden w-2/6 px-4 items-center justify-end">
              <Link legacyBehavior href="/register">
                <div className="cursor-pointer py-2 text-base px-4 text-center rounded-lg bg-gradient-to-r bg-red-500 text-white font-semibold">
                  Rejoindre la communauté
                </div>
              </Link>
              <Link legacyBehavior href="/login">
                <div className="cursor-pointer py-2 px-4 text-center text-red-500 font-semibold md:mx-4">
                  Connexion
                </div>
              </Link>
            </div>
          )}

          {auth.user && auth.token && (
            <div className="lg:flex xl:text-base text-sm hidden w-2/6 px-4 items-center justify-end">
              <Link legacyBehavior href={`/account/${auth.user.id}`}>
                <div className="lg:flex hidden items-center space-x-3">
                  <div className="text-right">
                    <div className="text-lg">{auth.user.username}</div>
                    <div className="text-sm text-gray-500">
                      {auth.user.email}
                    </div>
                  </div>
                  <div>
                    {auth.user.avatar != null && auth.user.avatar !== "null" ? (
                      <img
                        className="h-16 w-16 rounded-full object-cover"
                        src={auth.user.avatar}
                        alt={auth.user.username}
                      />
                    ) : (
                      <div className="h-16 w-16 text-gray-800">
                         <UserCircleIcon
                     
                     
                 />
                        </div> 
                     
                    )}
                  </div>
                </div>
              </Link>
            </div>
          )}

          <div
            onClick={() => setOpen({ ...open, menu: !open.menu })}
            className="lg:hidden block"
          >
            <button className="flex items-center px-3 py-2 rounded-md text-gray-500 focus:outline-none focus:ring">
              {open.menu ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        
    <nav className="relative lg:block hidden">
      <ul className="flex items-center justify-center list-none space-x-6 w-full xl:text-lg text-sm">
        <li className="py-4">
          <Link legacyBehavior href="/">
            <a className="cursor-pointer p-2 rounded-lg text-left font-semibold text-gray-500 hover:bg-red-500 hover:text-white">Acceuil</a>
          </Link>
        </li>
        <li className="relative group py-4">
          <div className="cursor-pointer p-2 rounded-lg text-left font-semibold flex items-center text-gray-500 group-hover:bg-red-500 group-hover:text-white">
            <span>Publications</span>
            <span className="ml-1">
              <ChevronDownIcon className="h-4 w-4 group-hover:hidden transition-all duration-500" />
              <ChevronUpIcon className="h-4 w-4 hidden group-hover:block transition-all duration-500" />
            </span>
          </div>
          <div className="absolute z-50 hidden bg-white w-52 shadow top-full left-0 rounded-b-lg text-base group-hover:block">
            <Link legacyBehavior href="/article">
              <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">Messages</a>
            </Link>
            <a href="/jobs" className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">Jobs</a>
            <Link legacyBehavior href="/calendrier">
              <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">Evenements</a>
            </Link>
            <a href="#" className="hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block">Annonces</a>
          </div>
        </li>
        <li className="relative group py-4">
          <div className="cursor-pointer p-2 rounded-lg text-left font-semibold flex items-center text-gray-500 group-hover:bg-red-500 group-hover:text-white">
            <span>Profils</span>
            <span className="ml-1">
              <ChevronDownIcon className="h-4 w-4 group-hover:hidden transition-all duration-500" />
              <ChevronUpIcon className="h-4 w-4 hidden group-hover:block transition-all duration-500" />
            </span>
          </div>
          <div className="absolute z-20 hidden bg-white w-52 shadow top-full left-0 rounded-b-lg text-base group-hover:block">
            <Link legacyBehavior href="/profile/[userType]" as="/profile/faithful">
              <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">Fidèle</a>
            </Link>
            <Link legacyBehavior href="/profile/[userType]" as="/profile/charge_paroissial">
              <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">Chargé Paroissial</a>
            </Link>
            <Link legacyBehavior href="/profile/[userType]" as="/profile/prayerGroup">
              <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">Groupe de Prière</a>
            </Link>
            <Link legacyBehavior href="/profile/[userType]" as="/profile/diocese">
              <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">Diocèse</a>
            </Link>
            <Link legacyBehavior href="/profile/[userType]" as="/profile/seat">
              <a className="hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block">Siège</a>
            </Link>
          </div>
        </li>
        <li className="py-4">
          <Link legacyBehavior href="/paroisses">
            <a className="cursor-pointer p-2 rounded-lg text-left font-semibold text-gray-500 hover:bg-red-500 hover:text-white">Paroisses</a>
          </Link>
        </li>
        <li className="relative group py-4">
          <div className="cursor-pointer p-2 rounded-lg text-left font-semibold flex items-center text-gray-500 group-hover:bg-red-500 group-hover:text-white">
            <span>Multimédia</span>
            <span className="ml-1">
              <ChevronDownIcon className="h-4 w-4 group-hover:hidden transition-all duration-500" />
              <ChevronUpIcon className="h-4 w-4 hidden group-hover:block transition-all duration-500" />
            </span>
          </div>
          <div className="absolute z-20 hidden bg-white w-52 shadow top-full left-0 rounded-b-lg text-base group-hover:block">
            <Link legacyBehavior href="/multimedia">
              <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">Audio</a>
            </Link>
            <Link legacyBehavior href="/multimedia">
              <a className="hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block">Video</a>
            </Link>
          </div>
        </li>
        <li className="relative group py-4">
          <div className="cursor-pointer p-2 rounded-lg text-left font-semibold flex items-center text-gray-500 group-hover:bg-red-500 group-hover:text-white">
            <span>Cantiques</span>
            <span className="ml-1">
              <ChevronDownIcon className="h-4 w-4 group-hover:hidden transition-all duration-500" />
              <ChevronUpIcon className="h-4 w-4 hidden group-hover:block transition-all duration-500" />
            </span>
          </div>
          <div className="absolute z-20 hidden bg-white w-52 shadow top-full left-0 rounded-b-lg text-base group-hover:block">
            <Link legacyBehavior href="/cantique">
              <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">Audios</a>
            </Link>
            <Link legacyBehavior href="/cantique">
              <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">Playlists</a>
            </Link>
            <Link legacyBehavior href="/cantique">
              <a className="hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block">Partitions</a>
            </Link>
          </div>
        </li>
        
        <li className="py-4">
          <Link legacyBehavior href="/home">
            <a className="cursor-pointer p-2 rounded-lg text-left font-semibold text-gray-500 hover:bg-red-500 hover:text-white">Formations</a>
          </Link>
        </li>
        <li className="relative group py-4">
          <div className="cursor-pointer p-2 rounded-lg text-left font-semibold flex items-center text-gray-500 group-hover:bg-red-500 group-hover:text-white">
            <span>Documents</span>
            <span className="ml-1">
              <ChevronDownIcon className="h-4 w-4 group-hover:hidden transition-all duration-500" />
              <ChevronUpIcon className="h-4 w-4 hidden group-hover:block transition-all duration-500" />
            </span>
          </div>
          <div className="absolute z-20 hidden bg-white w-52 shadow top-full left-0 rounded-b-lg text-base group-hover:block">
            <Link legacyBehavior href="/library">
              <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">Livres</a>
            </Link>
            <Link legacyBehavior href="/library">
              <a className="hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block">Documents officiels</a>
            </Link>
          </div>
        </li>
        <li className="py-4">
          <Link legacyBehavior href="/contact">
            <a className="cursor-pointer p-2 rounded-lg text-left font-semibold text-gray-500 hover:bg-red-500 hover:text-white">Contact</a>
          </Link>
        </li>
      
   

        </ul>
        </nav>



        {open.menu && (
          <div>
          <nav className="relative w-full">
            <div className="relative w-full px-6">
              <span className="absolute inset-y-0 left-6 flex items-center pl-3">
                <Search className="w-5 h-5 text-gray-400" />
              </span>
              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-red-400 text-sm focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300"
                placeholder="Search"
              />
            </div>
            <ul className="flex items-start flex-col justify-start py-4 list-none w-full text-sm">
              <li className="py-1 px-6 w-full">
                <Link legacyBehavior href="/">
                  <a className="cursor-pointer p-2 text-left block font-semibold text-gray-500 hover:bg-red-500 focus:bg-red-500 w-full hover:text-white">
                    Accueil
                  </a>
                </Link>
              </li>
              <li className="relative py-1 px-6 w-full">
                <div
                  onClick={() =>
                    setSubMenu({
                      ...subMenu,
                      publication: !subMenu.publication,
                    })
                  }
                  className="cursor-pointer p-2 text-left font-semibold flex justify-between w-full items-center text-gray-500 hover:bg-red-500 hover:text-white"
                >
                  <span>Publications</span>
                  <span className="">
                    {open.submenu.publication ? (
                      <ChevronUpIcon className="h-4 w-4" />
                    ) : (
                      <ChevronDownIcon className="h-4 w-4" />
                    )}
                  </span>
                </div>

                <div>
                  {subMenu.publication && (
                    <div
                      onClick={() => setOpen(open)}
                      className="shadow rounded-lg my-2 bg-gray-50 text-sm overflow-hidden"
                    >
                      <Link legacyBehavior href="/article">
                        <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">
                          Messages
                        </a>
                      </Link>
                      <a
                        href="#"
                        className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"
                      >
                        Jobs
                      </a>
                      <Link legacyBehavior href="/calendrier">
                        <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">
                          Evenements
                        </a>
                      </Link>
                      <a
                        href="#"
                        className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"
                      >
                        Annonces
                      </a>
                    </div>
                  )}
                </div>
              </li>
              <li className="relative py-1 px-6 w-full">
                <div
                  onClick={() =>
                    setSubMenu({ ...subMenu, profil: !subMenu.profil })
                  }
                  className="cursor-pointer p-2 text-left font-semibold flex justify-between w-full items-center text-gray-500 hover:bg-red-500 hover:text-white"
                >
                  <span>Profils</span>
                  <span className="">
                    {subMenu.profil ? (
                      <ChevronUpIcon className="h-4 w-4" />
                    ) : (
                      <ChevronDownIcon className="h-4 w-4" />
                    )}
                  </span>
                </div>

                <div>
                  {subMenu.profil && (
                    <div
                      onClick={() => setOpen(open)}
                      className="shadow rounded-lg my-2 bg-gray-50 text-sm overflow-hidden"
                    >
                      <Link legacyBehavior href="/profile/faithful">
                        <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">
                          Fidèle
                        </a>
                      </Link>
                      <Link
                        legacyBehavior
                        href="/profile/faithful?parish_official=true"
                      >
                        <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">
                          Chargé Paroissial
                        </a>
                      </Link>
                      <Link legacyBehavior href="/profile/prayerGroup">
                        <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">
                          Groupe de Prière
                        </a>
                      </Link>
                      <Link legacyBehavior href="/profile/diocese">
                        <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">
                          Diocèse
                        </a>
                      </Link>
                      <Link legacyBehavior href="/profile/seat">
                        <a className="hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block">
                          Siège
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </li>
              <li className="py-1 px-6 w-full">
                <Link legacyBehavior href="/">
                  <a className="cursor-pointer p-2 text-left block font-semibold text-gray-500 hover:bg-red-500 focus:bg-red-500 w-full hover:text-white">
                    Paroisses
                  </a>
                </Link>
              </li>
              <li className="relative py-1 px-6 w-full">
                <div
                  onClick={() =>
                    setSubMenu({ ...subMenu, multimedia: !subMenu.multimedia })
                  }
                  className="cursor-pointer p-2 text-left font-semibold flex justify-between w-full items-center text-gray-500 hover:bg-red-500 hover:text-white"
                >
                  <span>Multimédia</span>
                  <span className="">
                    {subMenu.multimedia ? (
                      <ChevronUpIcon className="h-4 w-4" />
                    ) : (
                      <ChevronDownIcon className="h-4 w-4" />
                    )}
                  </span>
                </div>
                <div>
                  {subMenu.multimedia && (
                    <div
                      onClick={() => setOpen(open)}
                      className="shadow rounded-lg my-2 bg-gray-50 text-sm overflow-hidden"
                    >
                      <Link legacyBehavior href="/multimedia">
                        <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">
                          Audio
                        </a>
                      </Link>
                      <Link legacyBehavior href="/multimedia">
                        <a className="hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block">
                          Video
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </li>
              <li className="relative w-full py-1 px-6">
                <div
                  onClick={() =>
                    setSubMenu({ ...subMenu, cantiques: !subMenu.cantiques })
                  }
                  className="cursor-pointer p-2 text-left font-semibold flex justify-between w-full items-center text-gray-500 hover:bg-red-500 hover:text-white"
                >
                  <span>Cantiques</span>
                  <span className="">
                    {subMenu.cantiques ? (
                      <ChevronUpIcon className="h-4 w-4" />
                    ) : (
                      <ChevronDownIcon className="h-4 w-4" />
                    )}
                  </span>
                </div>

                <div>
                  {open.submenu.cantiques && (
                    <div
                      onClick={() => setOpen(open)}
                      className="shadow rounded-lg my-2 bg-gray-50 text-sm overflow-hidden"
                    >
                      <Link legacyBehavior href="/cantique">
                        <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">
                          Audios
                        </a>
                      </Link>
                      <Link legacyBehavior href="/cantique">
                        <a className="hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block">
                          Playlists
                        </a>
                      </Link>
                      <Link legacyBehavior href="/cantique">
                        <a className="hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block">
                          Partitions
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </li>
              <li className="py-1 px-6 w-full">
                <Link legacyBehavior href="/">
                  <a className="cursor-pointer p-2 text-left block font-semibold text-gray-500 hover:bg-red-500 focus:bg-red-500 w-full hover:text-white">
                    Logout
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        )}
       
      </header>
    </div>
  );
};

export default SiteNavigation;
