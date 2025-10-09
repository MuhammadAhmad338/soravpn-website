import React from 'react';

const Features = () => {
    return (
        <div className='max-w-[88rem] mx-auto px-6' id="features">
            <div className="flex flex-col md:flex-row items-center justify-center mt-10 space-y-6 md:space-y-0 md:space-x-12">
                <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
                    <img src="/services.png" alt="SoraVPN Logo" className="w-full h-auto max-w-1xl " />
                </div>
                <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <p className="text-4xl leading-tight font-semibold">We provide many <span className="text-orange-500 font-bold">Features</span> you can use </p>
                    <p className='text-gray-600'>Explore our wide range of features designed to enhance your experience.</p>
                    <ol className='list-disc list-inside text-left space-y-2 text-gray-600'>
                        <li>High-speed connections</li>
                        <li>Secure and private browsing</li>
                        <li>Easy-to-use interface</li>
                        <li>24/7 customer support</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Features;