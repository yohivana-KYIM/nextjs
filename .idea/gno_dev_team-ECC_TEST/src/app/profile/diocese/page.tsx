'use client'

import React, {useState} from 'react'
import CarteFidele from '@/app/components/navbar/CarteFidele'
import { Calendar, Bookmark, ChevronDown, ChevronUp, Filter, User, MapPin, Grid} from 'react-feather';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
const data = [
    {
        id: 1,
        name: 'Agoons',
        surname: 'Kenemi',
        email: 'kenagoons@gmail.com',
        country: 'Cameroun',
        city: 'Yaoundé',
        sex: 'Homme',
        ministry: 'Prédicateur'
    },
    {
        id: 1,
        name: 'Asante',
        surname: 'Kwaku',
        email: 'asantek@gmail.com',
        country: 'Nigéria',
        city: 'Lagos',
        sex: 'Homme',
        ministry: 'Chorale'
    },
    {
        id: 1,
        name: 'Ngwa',
        surname: 'Cécile',
        email: 'cécilengwa@gmail.com',
        country: 'Cameroun',
        city: 'Douala',
        sex: 'Femme',
        ministry: 'Prédicateur'
    },
    {
        id: 1,
        name: 'Fomen',
        surname: 'Boris',
        email: 'Borisfo@gmail.com',
        country: 'Cameroun',
        city: 'Bafoussam',
        sex: 'Homme',
        ministry: 'Chorale'
    },
    {
        id: 1,
        name: 'Afé',
        surname: 'Maxime',
        email: 'maxafé@gmail.com',
        country: 'Bénin',
        city: 'Cotonou',
        sex: 'Homme',
        ministry: 'Prédicateur'
    },
    {
        id: 1,
        name: 'Lefevre',
        surname: 'Pierre',
        email: 'lefrevepi32@gmail.com',
        country: 'France',
        city: 'Roissy',
        sex: 'Homme',
        ministry: 'Chorale'
    },
    {
        id: 1,
        name: 'Etogo',
        surname: 'Solange',
        email: 'solangeetogo@gmail.com',
        country: 'Cameroun',
        city: 'Yaoundé',
        sex: 'Femme',
        ministry: 'Prédicateur'
    },
    {
        id: 1,
        name: 'Obafémi',
        surname: 'Wayatt',
        email: 'obafway24@gmail.com',
        country: 'Nigéria',
        city: 'Abuja',
        sex: 'Homme',
        ministry: 'Chorale'
    },
    {
        id: 1,
        name: 'Picard',
        surname: 'Jeanne',
        email: 'picardjeanne@gmail.com',
        country: 'France',
        city: 'Paris',
        sex: 'Femme',
        ministry: 'Prédicateur'
    },
    {
        id: 1,
        name: 'Elame',
        surname: 'Alfred',
        email: 'Elameal@gmail.com',
        country: 'Cameroun',
        city: 'Douala',
        sex: 'Homme',
        ministry: 'Chorale'
    },

]

function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
        <div className="w-full h-auto py-16 flex flex-col items-center justify-center">
        <h1 className="font-semibold text-2xl md:text-4xl text-zinc-800">Découvrez nos Diocèses </h1>
        <p className="text-sm md:text-lg text-zinc-600 my-4 text-center w-2/3 md:w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. accusantium recusandae deserunt.</p>

        <div className="flex flex-col md:flex-row items-center justify-center w-full md:my-6 p-3">
          <input className="w-full md:w-1/3 border-gray-300 mt-1 border form-input p-2 outline-none block rounded-lg shadow-sm" type="text" placeholder="Nom du diocèse" />
          <button className="flex items-center justify-center border-none mt-4 md:mt-1 h-10 w-36 md:w-12 md:ml-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="text-white w-6 h-6 mr-3 md:mr-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <p className="md:hidden font-semibold text-base text-white">Rechercher</p>
          </button>
        </div>
        </div>

        <div className="md:hidden flex items-center justify-center bg-white shadow rounded-2xl w-28 h-10 py-1.5 px-4 ml-4  cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>
                    <p className="font-semibold text-zinc-800 text-lg">Filtres</p>
        </div>
        <div className="max-w-screen-xl  mx-auto  flex items-start justify-center  pt-3 pb-12 px-2">

            <div className="hidden md:visible w-1/5 h-auto mr-5 md:flex flex-col">
                <div className="flex items-center justify-center mb-6 bg-white shadow rounded-2xl min-w-28 h-10 py-1.5 px-4  cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3 text-black">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                        </svg>
                        <p className="font-semibold text-zinc-800 text-lg">Filtres</p>
                </div>
                <Accordion className='mt-2'>
                    <AccordionItem onClick={() => setIsOpen(!isOpen)}>
                        <AccordionItemButton className="flex w-full justify-between rounded-lg bg-blue-50 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>Continent</span>
                        { isOpen? (
                            <ChevronUp className="h-5 w-5 text-blue-500 rotate-180 transform" />
                            ):(
                            <ChevronUp className="h-5 w-5 text-blue-500" />
                            )
                        }
                        </AccordionItemButton>
                        {isOpen && (
                        <AccordionItemPanel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="flex items-center">
                                    <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="yes"/>
                                    <label htmlFor="yes">Afrique</label>
                            </div>
                
                            <div className="flex items-center">
                                    <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="no" />
                                    <label htmlFor="no">Europe</label>
                            </div>
                        </AccordionItemPanel>
                        )}
                    </AccordionItem>
                </Accordion>
                <Accordion className='mt-2'>
                    <AccordionItem onClick={() => setIsOpen1(!isOpen1)}>
                        <AccordionItemButton className="flex w-full justify-between rounded-lg bg-blue-50 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>Pays d'implantation'</span>
                        { isOpen1? (
                            <ChevronUp className="h-5 w-5 text-blue-500 rotate-180 transform" />
                            ):(
                            <ChevronUp className="h-5 w-5 text-blue-500" />
                            )
                        }
                        </AccordionItemButton>
                        {isOpen1 && (
                        <AccordionItemPanel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="flex items-center">
                                    <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="yes"/>
                                    <label htmlFor="yes">Cameroun</label>
                            </div>
                
                            <div className="flex items-center">
                                    <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="no" />
                                    <label htmlFor="no">Congo</label>
                            </div>
                        </AccordionItemPanel>
                        )}
                    </AccordionItem>
                </Accordion>
                <Accordion className='mt-2'>
                    <AccordionItem onClick={() => setIsOpen2(!isOpen2)}>
                        <AccordionItemButton className="flex w-full justify-between rounded-lg bg-blue-50 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>Ville</span>
                        { isOpen2? (
                            <ChevronUp className="h-5 w-5 text-blue-500 rotate-180 transform" />
                            ):(
                            <ChevronUp className="h-5 w-5 text-blue-500" />
                            )
                        }
                        </AccordionItemButton>
                        {isOpen2 && (
                        <AccordionItemPanel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="flex items-center">
                                    <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="yes"/>
                                    <label htmlFor="yes">Douala</label>
                            </div>
                
                            <div className="flex items-center">
                                    <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="no" />
                                    <label htmlFor="no">Yaounde</label>
                            </div>
                        </AccordionItemPanel>
                        )}
                    </AccordionItem>
                </Accordion>
                <Accordion className='mt-2'>
                    <AccordionItem onClick={() => setIsOpen3(!isOpen3)}>
                        <AccordionItemButton className="flex w-full justify-between rounded-lg bg-blue-50 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>Annee de creation</span>
                        { isOpen3? (
                            <ChevronUp className="h-5 w-5 text-blue-500 rotate-180 transform" />
                            ):(
                            <ChevronUp className="h-5 w-5 text-blue-500" />
                            )
                        }
                        </AccordionItemButton>
                        {isOpen3 && (
                        <AccordionItemPanel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="flex items-center">
                                    <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="yes"/>
                                    <label htmlFor="yes">2008</label>
                            </div>
                
                            <div className="flex items-center">
                                    <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="no" />
                                    <label htmlFor="no">2010</label>
                            </div>
                        </AccordionItemPanel>
                        )}
                    </AccordionItem>
                </Accordion>
                <Accordion className='mt-2'>
                    <AccordionItem onClick={() => setIsOpen4(!isOpen4)}>
                        <AccordionItemButton className="flex w-full justify-between rounded-lg bg-blue-50 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>Dimension du lieu de priere</span>
                        { isOpen4? (
                            <ChevronUp className="h-5 w-5 text-blue-500 rotate-180 transform" />
                            ):(
                            <ChevronUp className="h-5 w-5 text-blue-500" />
                            )
                        }
                        </AccordionItemButton>
                        {isOpen4 && (
                        <AccordionItemPanel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="flex items-center">
                                <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="yes" />
                                <label htmlFor="yes">0 - 50m2</label>
                            </div>
            
                            <div className="flex items-center">
                                <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="no" />
                                <label htmlFor="no">50 - 100m2</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="yes" />
                                <label htmlFor="yes">100 - 200m2</label>
                            </div>
            
                            <div className="flex items-center">
                                <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="no" />
                                <label htmlFor="no"> {'>'} 200m2</label>
                            </div>
                        </AccordionItemPanel>
                        )}
                    </AccordionItem>
                </Accordion>
                <Accordion className='mt-2'>
                    <AccordionItem onClick={() => setIsOpen5(!isOpen5)}>
                        <AccordionItemButton className="flex w-full justify-between rounded-lg bg-blue-50 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>Ordre de culte</span>
                        { isOpen5? (
                            <ChevronUp className="h-5 w-5 text-blue-500 rotate-180 transform" />
                            ):(
                            <ChevronUp className="h-5 w-5 text-blue-500" />
                            )
                        }
                        </AccordionItemButton>
                        {isOpen5 && (
                        <AccordionItemPanel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="flex items-center">
                                <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="yes" />
                                <label htmlFor="yes">Imeko</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="yes"  />
                                <label htmlFor="yes">Porto-novo</label>
                            </div>
                        </AccordionItemPanel>
                        )}
                    </AccordionItem>
                </Accordion>
                <Accordion className='mt-2'>
                    <AccordionItem onClick={() => setIsOpen6(!isOpen6)}>
                        <AccordionItemButton className="flex w-full justify-between rounded-lg bg-blue-50 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>Nombre de fidele</span>
                        { isOpen6? (
                            <ChevronUp className="h-5 w-5 text-blue-500 rotate-180 transform" />
                            ):(
                            <ChevronUp className="h-5 w-5 text-blue-500" />
                            )
                        }
                        </AccordionItemButton>
                        {isOpen6 && (
                        <AccordionItemPanel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="flex items-center">
                                    <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="yes"/>
                                    <label htmlFor="yes">- 95</label>
                            </div>
                
                            <div className="flex items-center">
                                    <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="no" />
                                    <label htmlFor="no">95 +</label>
                            </div>
                        </AccordionItemPanel>
                        )}
                    </AccordionItem>
                </Accordion>
                <Accordion className='mt-2'>
                    <AccordionItem onClick={() => setIsOpen7(!isOpen7)}>
                        <AccordionItemButton className="flex w-full justify-between rounded-lg bg-blue-50 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>Propose cours bibique</span>
                        { isOpen7? (
                            <ChevronUp className="h-5 w-5 text-blue-500 rotate-180 transform" />
                            ):(
                            <ChevronUp className="h-5 w-5 text-blue-500" />
                            )
                        }
                        </AccordionItemButton>
                        {isOpen7 && (
                        <AccordionItemPanel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="flex items-center">
                                    <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="yes"/>
                                    <label htmlFor="yes">Oui</label>
                            </div>
                
                            <div className="flex items-center">
                                    <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="no" />
                                    <label htmlFor="no">Non</label>
                            </div>
                        </AccordionItemPanel>
                        )}
                    </AccordionItem>
                </Accordion>
            </div>

            {/* block des cartes de fideles  */}
            <div className="w-full grid grid-cols-1  md:grid-cols-3 gap-3 md:gap-6">
                {data.map((d, index) => (
                <CarteFidele key={index} data={d} />
                ))}
            </div>
        </div>   
      
    </div>
  )
}

export default page
