'use client'

import React, {useState} from 'react'
import { Calendar, Bookmark, ChevronDown, ChevronUp, Filter, User, MapPin, Grid} from 'react-feather';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import EventCard from '../components/navbar/EventCard';
    
const data = [
  {
    type: 'En personne',
    titre: 'Evangelisation Céleste Annuelle',
    hd: '12h00',
    hf: '18h30',
    date: '12 avril 2023',
    ville: 'Douala',
    pays: 'Cameroun',
  },
  {
    type: 'Livestream',
    titre: 'Conférence sur la Spiritualité dans le numérique',
    hd: '14h00',
    hf: '20h30',
    date: '23 avril 2023',
    ville: 'Porto-novo',
    pays: 'Bénin',
  },
  {
    type: 'En-personne',
    titre: 'ECC Annual Summit 2023',
    hd: '11h00',
    hf: '18h30',
    date: '13 mai 2023',
    ville: 'Abuja',
    pays: 'Nigéria',
  },
];

function page() {
  const [isOpen, setIsOpen] = useState(false);

  return (    
    <div className="flex flex-col min-h-screen bg-white m-0 p-0">
      {/* Hero section */}
      <div className="relative overflow-clip flex flex-col items-start justify-center w-full h-80 bg-gradient-to-tl from-blue-500 via-blue-300 to-blue-500 p-12">
        <Calendar className="absolute z-0 -right-2 -rotate-12 w-72 h-72 text-blue-800/50" />
        <div className="flex">
          <h5 className="font-bold text-blue-800 text-6xl">Evenements</h5>
        </div>
        <h1 className="w-1/2 font-normal text-gray-100 text-lg mt-10">
          Tous vos événements physiques et virtuels directement sur votre site. Vous voulez rejoindre ? Voici les événements à venir.
        </h1>
      </div>

      {/* Body section */}
      <div className="w-full min-h-[500px] h-auto flex justify-start">
        {/* Filtres */}
        <div className="flex flex-col w-1/6 h-auto bg-white px-4">

          <div className="w-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>

            <h2 className="font-semibold text-zinc-800 text-xl ml-4 my-8">Filtres</h2>
          </div>

          <div className="mx-auto w-full max-w-md rounded-2xl bg-white">                   
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
                      <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="yes" />
                      <label htmlFor="yes">Artiste Chantre</label>
                    </div>  
                    <div className="flex items-center">
                      <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="no"  />
                      <label htmlFor="no">Chorale</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="yes" />
                        <label htmlFor="yes">Cours biblique</label>
                    </div>
    
                    <div className="flex items-center">
                            <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="no"   />
                        <label htmlFor="no">Chargé paroissial</label>
                    </div>

                    <div className="flex items-center">
                        <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="yes" />
                        <label htmlFor="yes">Déchaussé</label>
                    </div>
    
                    <div className="flex items-center">
                            <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="no"  />
                        <label htmlFor="no">Evangelisation</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="form-checkbox border-gray-300 mr-2" id="yes" />
                        <label htmlFor="yes">Fidele</label>
                    </div>
                  </AccordionItemPanel>
                )}
              </AccordionItem>
            </Accordion>
          </div>
          
        </div>

        <div className="flex flex-col items-start w-5/6 bg-white p-6">
          <h1 className="font-bold text-3xl text-gray-800 tracking-tight mb-4">Evenements en cours</h1>
          <div className="w-full px-3 flex items-center justify-between mb-3">
            <div className="flex flex-col md:flex-row items-center justify-start w-1/2  md:my-4 py-2">
              <button className="flex items-center justify-center border-none md:mr-1  h-10 w-36 md:w-12 bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="text-zinc-400 w-6 h-6 mr-3 md:mr-0">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                      <p className="md:hidden font-semibold text-base text-white">Rechercher</p>
              </button>
              <input className="w-full md:w-4/5 border-gray-300 border-0 focus-visible:ring-transparent border-b form-input p-2 outline-none block" type="text" placeholder="Trouvez un evenement"/>
            </div>

            <div className="flex justify-end w-1/2 px-3">
              <div className="flex items-center justify-between w-24 h-10 px-1 rounded-[14px] bg-blue-100">
                <div className="flex items-center justify-center w-10 h-8 rounded-[12px] bg-white shadow-lg">
                    <Grid className="h-5 w-5 text-zinc-800"/>
                </div>
                <div className="flex items-center justify-center w-10 h-8 rounded-[12px] cursor-pointer">
                    <MapPin className="h-5 w-5 text-gray-600 stroke-2"/>
                </div>
              </div>
            </div>

          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 py-4">
            {data.map((d, index) => (
              <EventCard key={index} data={d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page