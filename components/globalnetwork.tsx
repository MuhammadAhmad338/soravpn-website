import React from 'react'
import Image from 'next/image'

const GlobalNetwork = () => {
  return (
    <div className='flex justify-center flex-col items-center text-center space-y-4 max-w-[88rem] mx-auto px-6 py-12' id="global-network">
      <p className='text-3xl font-bold'>Huge <span className='text-orange-500'>Global Network</span> to use VPN </p>
      <p className='text-gray-600 max-w-2xl'>
        See SoraVPN everywhere to make it easier for you when you move locations.
      </p>
      <div className='mt-10'>
        <Image src="/locations.png" alt="Global Network" width={800} height={400} className="w-full h-auto max-w-4xl " />
      </div>
      <div className='mt-10 w-full max-w-7xl text-left space-y-6 px-2 sm:px-4'>
        <Image src="/Sponsored.png" alt="Sponsored" width={1200} height={900} className="w-full h-auto scale-125 sm:scale-90" />
      </div>
    </div>
  );
}

export default GlobalNetwork;