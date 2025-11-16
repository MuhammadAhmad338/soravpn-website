import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-6 mb-4">
      <div className="flex flex-col md:flex-row items-center justify-center mt-10">
        <div className="md:w-1/2 text-center md:text-left space-y-6 mb-12">
          <p className="text-5xl leading-tight font-semibold">
            hello ahmad anything to be easy with <span className="text-orange-500 font-bold">SoraVPN.</span>
          </p>
          <p className='text-gray-600'>
            Provide a network for all your needs with ease and fun using SoraVPN. Discover interesting features from us.
          </p>
          <Link href='/' className="bg-orange-500 text-white border border-orange-500 px-4 py-2 hover:cursor-pointer font-bold rounded-lg sm:text-2xl shadow-lg">
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
          <Image src="/heroimage.png" alt="SoraVPN Logo" className="w-full h-auto max-w-2xl" width={600} height={400} />
        </div>
      </div>
      <div className="rounded-2xl bg-orange-600 mt-20 p-4 max-w-[64rem] mx-auto">
        <p className="text-white text-center md:text-xl font-semibold">
          Join over 10,000+ users who trust SoraVPN for their online privacy and security.
        </p>
      </div>
    </div>
  );
}

export default Hero;