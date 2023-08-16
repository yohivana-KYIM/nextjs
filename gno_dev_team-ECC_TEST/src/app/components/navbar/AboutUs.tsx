import React from 'react'

export default function AboutUs() {
  return (
   
       
        <div className="flex items-center lg:flex-row flex-col justify-start w-full md:w-[88%] h-auto my-20 mx-auto bg-white">
            <div className="flex flex-col lg:w-[70%]  lg:p-4">
                <div className="flex items-center justify-start">
                    <div className="w-5 h-5 bg-blue-600 rounded-full mx-4"></div>
                    <h1 className="font-bold text-2xl lg:text-3xl text-zinc-800 mr-6">Histoires Récentes</h1>
                    <div className="lg:w-[48%] h-4 bg-gray-300"></div>
                </div>
    
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-2 my-10 w-full">
                    <div className="relative lg:w-[424px] h-[296px] w-full bg-white p-1">
                        <div className="absolute  ml-2 mt-2 flex items-center justify-center h-[276px] w-full lg:w-[416px] bg-indigo-600 rounded-lg"></div>
                        <div className="relative flex items-center justify-center h-[276px] w-full lg:w-[416px] bg-violet-200 rounded-lg"></div>
                    </div>
                    <div className="flex flex-col items-start justify-start lg:w-[296px] w-full h-[354px] lg:ml-6 bg-white lg:p-3">
                            <div className="h-[198px] lg:w-[268px] w-full bg-violet-300 rounded-xl"></div>
                            <h1 className="font-semibold text-2xl my-4 text-left">La spiritualité et le travail quel impact.</h1>
                            <span className="flex">
                            <h6 className="font-normal text-gray-500 text-base lg:mr-4">Par John Leo</h6>
                            <h6 className="flex items-center font-normal text-gray-500 text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                28 mars 2021</h6>
                        </span>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:items-center lg:justify-center lg:w-[424px] w-full lg:h-[184px] bg-white lg:mt-[-40px] lg:px-2">
                        <div className="lg:w-[240px] w-full h-[156px] rounded-xl bg-violet-300"></div>
                        <div className="flex flex-col lg:ml-4 lg:mt-0 mt-2">
                            <div className="bg-pink-700 p-1 rounded-md text-white font-semibold w-24">Technology</div>
                            <h2 className="my-1.5 font-semibold text-[21px] text-zinc-800">Paix du coeur et santé, le role du seigneur </h2>
                        <span className="flex my-1">
                            <h6 className="flex items-center font-normal text-gray-500 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                                    28 mars 20211</h6>
                            </span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-start justify-start w-full lg:w-[296px] h-[354px] lg:ml-6 bg-white lg:p-3">
                            <div className="h-[198px] w-full lg:w-[268px] bg-violet-300 rounded-xl"></div>
                            <h1 className="font-semibold text-2xl my-4 text-left">L'amour de Dieu, un gage sur pour le salut de l'ame.</h1>
                            <span className="flex">
                            <h6 className="font-normal text-gray-500 text-base mr-4">Par John Leo</h6>
                            <h6 className="flex items-center font-normal text-gray-500 text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                28 mars 2021</h6>
                        </span>
                    </div>
                    <div className="flex lg:items-center lg:flex-row flex-col justify-start items-start lg:justify-center lg:w-[424px] w-full lg:h-[184px] bg-white lg:mt-[-192px] lg:px-2">
                        <div className="lg:w-[240px] w-full h-[156px] rounded-xl bg-violet-300"></div>
                        <div className="flex flex-col lg:ml-4 lg:mt-0 mt-2">
                            <div className="bg-red-700 p-1 rounded-md text-white font-semibold w-24 text-center">Amour</div>
                            <h2 className="my-1.5 font-semibold text-[21px] text-zinc-800">Paix du coeur et santé, le role du seigneur </h2>
                <span className="flex my-1">
                    <h6 className="flex items-center font-normal text-gray-500 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                28 mars 20211</h6>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="flex flex-col items-start justify-start lg:w-[30%] w-full h-auto p-4 ">
                <div className="flex flex-col  items-center justify-center w-[96%] h-full border-blue-600 border-4 rounded-xl p-4 -mt-4">
                    <div className="flex items-center justify-start bg-white p-4 -mt-10">
                    <div className="w-5 h-5 bg-blue-600 rounded-full mx-4"></div>
                    <h1 className="font-bold text-3xl text-zinc-800 mr-6">Les Exclus</h1>
                </div>
    
    
            <div className="flex flex-col w-[254px] h-auto p-1.5 my-4 border-b-2 border-gray-300 pb-6">
                <div className="flex items-center justify-start w-full">
                    <div className="w-6 h-2 bg-red-600"></div>
                    <h4 className="text-base text-red-600 ml-3">Santé</h4>
                </div>
                <h2 className="my-1.5 font-semibold text-[21px] text-zinc-800">Paix du coeur et santé, le role du seigneur </h2>
                <span className="flex my-1">
                    <h6 className="flex items-center font-normal text-gray-500 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                28 mars 20211</h6>
                        </span>
            </div>
    
            <div className="flex flex-col w-[254px] h-auto p-1.5 my-4 border-b-2 border-gray-300 pb-6">
                <div className="flex items-center justify-start w-full">
                    <div className="w-6 h-2 bg-blue-600"></div>
                    <h4 className="text-base text-blue-600 ml-3">Santé</h4>
                </div>
                <h2 className="my-1.5 font-semibold text-[21px] text-zinc-800">Paix du coeur et santé, le role du seigneur </h2>
                <span className="flex my-1">
                    <h6 className="flex items-center font-normal text-gray-500 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                28 mars 20211</h6>
                        </span>
            </div>
    
            <div className="flex flex-col w-[254px] h-auto p-1.5 my-4 border-b-2 border-gray-300 pb-6">
                <div className="flex items-center justify-start w-full">
                    <div className="w-6 h-2 bg-orange-600"></div>
                    <h4 className="text-base text-orange-600 ml-3">Santé</h4>
                </div>
                <h2 className="my-1.5 font-semibold text-[21px] text-zinc-800">Paix du coeur et santé, le role du seigneur </h2>
                <span className="flex my-1">
                    <h6 className="flex items-center font-normal text-gray-500 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                28 mars 20211</h6>
                        </span>
            </div>
    
            <div className="flex flex-col w-[254px] h-auto p-1.5 my-4">
                <div className="flex items-center justify-start w-full">
                    <div className="w-6 h-2 bg-green-600"></div>
                    <h4 className="text-base text-green-600 ml-3">Santé</h4>
                </div>
                <h2 className="my-1.5 font-semibold text-[21px] text-zinc-800">Paix du coeur et santé, le role du seigneur </h2>
                <span className="flex my-1">
                    <h6 className="flex items-center font-normal text-gray-500 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                28 mars 20211</h6>
                        </span>
            </div>
                </div>
            </div>
        </div>
   
  )
}
