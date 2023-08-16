import { useState } from 'react';
import {
  ArrowLeft as ArrowLeftOnRectangleIcon,
  Book,
  Package as BuildingLibraryIcon,
  FileText as DocumentIcon,
  Film,
  Film as FilmIcon,
  Music as MusicalNoteIcon,
  Book as NewspaperIcon,
  Grid as Squares2X2Icon,
  Users as UserGroupIcon,
} from 'react-feather';

import Link from 'next/link';

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

  interface OpenState {
    menu: boolean;
  }
  
const SideBar: React.FC = () => {
    const auth: AuthData = {
        user: { name: 'German', username: 'Hello', email: 'yimhelgerman@gmail.com', id: 2, avatar: null },
         //token: '123456789',
         //user:null,
         token:null
       };
       const [open, setOpen] = useState<OpenState>({ menu: true });
  
    return (
      <div className={`relative z-50 ${open.menu ? 'mr-72' : ''} h-full transition-all duration-1000`}>
        <div className="no-scrollbar shadow fixed flex h-screen w-72 flex-col overflow-y-auto pb-3 bg-[#16a085]">
          <div className="w-full flex items-center py-2 justify-start border-b">
            <div className="w-[60px] h-[46px]">
              <img src="/images/LOGO.png" className="w-full h-full object-contain" alt="Logo" />
            </div>
            <h5 className="text-[1.3rem] font-semibold text-white">ECC - Admin Panel</h5>
          </div>
          <div className="py-2">
            <div className="flex items-center flex-col justify-center p-1 rounded-xl cursor-pointer">
              <div className="flex items-center justify-center overflow-hidden mb-2 bg-gradient-to-r from-blue-500 to-blue-600 w-32 h-32 text-white font-semibold p-2 rounded-full cursor-pointer">
                {auth.user?.avatar !== null && auth.user?.avatar !== 'null' ? (
                  <img className="h-full w-full rounded-full object-cover" src={auth.user?.avatar} alt={auth.user?.username} />
                ) : (
                  <span className="text-5xl uppercase">{auth.user.username[0]}</span>
                )}
              </div>
              <div className="font-semibold text-white text-lg">{auth.user?.username}</div>
              <div className="text-sm text-gray-200">{auth.user?.email}</div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="w-full flex flex-col my-3 px-4">
              <Link legacyBehavior href="/admin/dashboard">
                <a className="flex items-center w-full p-2 space-x-2 my-2 rounded-lg hover:bg-white hover:text-black text-white group cursor-pointer">
                  <Squares2X2Icon className="w-6 h-6" />
                  <h3 className="font-semibold text-lg">Dashboard</h3>
                </a>
              </Link>
              <div className="flex items-center w-full p-2 my-2 rounded-lg space-x-2 hover:bg-white hover:text-black text-white group cursor-pointer">
                <NewspaperIcon className="w-6 h-6" />
                <h3 className="font-semibold text-lg">Publication</h3>
              </div>
              <Link legacyBehavior href="/admin/user">
                <a className="flex items-center w-full p-2 my-2 rounded-lg hover:bg-white space-x-2 hover:text-black text-white group cursor-pointer">
                  <UserGroupIcon className="w-6 h-6" />
                  <h3 className="font-semibold text-lg">Profils</h3>
                </a>
              </Link>
              <div className="flex items-center w-full p-2 my-2 rounded-lg hover:bg-white space-x-2 hover:text-black text-white group cursor-pointer">
                <BuildingLibraryIcon className="w-6 h-6" />
                <h3 className="font-semibold text-lg">Paroisses</h3>
              </div>
              
                            <div className="flex items-center w-full p-2 my-2 rounded-lg hover:bg-white space-x-2 hover:text-black text-white group cursor-pointer">
                              <FilmIcon className="w-6 h-6" />
                              <h3 className="font-semibold text-lg">Multimédia</h3>
                            </div>
                            <div className="flex items-center w-full p-2 my-2 rounded-lg hover:bg-white space-x-2 hover:text-black text-white group cursor-pointer">
                              <MusicalNoteIcon className="w-6 h-6" />
                              <h3 className="font-semibold text-lg">Cantiques</h3>
                            </div>
                            <div className="flex items-center w-full p-2 my-2 rounded-lg hover:bg-white space-x-2 hover:text-black text-white group cursor-pointer">
                              <DocumentIcon className="w-6 h-6" />
                              <h3 className="font-semibold text-lg">Documents</h3>
                            </div>
                          </div>
                          <div className="px-4 border-t">
                            <div className="flex items-center w-full p-2 my-2 rounded-lg hover:bg-white space-x-2 hover:text-black text-white group cursor-pointer">
                              <ArrowLeftOnRectangleIcon className="w-6 h-6" />
                              <h3 className="font-semibold text-lg">Logout</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                };
                
                export default SideBar;
                
  
  

