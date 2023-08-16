import React from 'react'

function DonateSection() {
  return (
    
    
<div className='relative flex items-center lg:flex-row flex-col justify-center lg:w-[88%] w-[90%] lg:h-[240px] py-4 bg-indigo-600 rounded-xl mx-auto my-10'>
    <div className="absolute bg-[url('/images/newsletter_bg.png')] bg-cover w-full h-full"></div>
    <div className="relative w-full flex items-center lg:flex-row flex-col justify-between px-6 lg:px-40">
        <div className="flex flex-col lg:w-[468px] lg:mr-6">
            <h1 className="font-bold text-3xl text-white">Faites vos donations en ligne depuis notre site.</h1>
            <p className="text-slate-100 font-medium my-4 text-lg">Venez en aide au necessiteux à votre niveau, apportez un peu d'amour.</p>
        </div>

        <div className="w-36  bg-white text-center font-medium text-blue-600 p-5 rounded-lg">Faire un don</div>
    </div>
</div>

  )
}

export default DonateSection