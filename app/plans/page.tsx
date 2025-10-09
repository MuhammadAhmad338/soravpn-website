import React from 'react'

const Plans = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-4xl font-bold mb-8'>Plans Page</h1>
        <p className='text-gray-600 text-lg'>Choose the plan that fits your needs.</p>
        <div className='flex flex-row space-y-4'>
            {/* Example Plan Cards */}
            <div className='border p-6 rounded-lg shadow-md w-80'>
                <h2 className='text-2xl font-semibold mb-4'>Basic Plan</h2>
                <p className='text-gray-700 mb-4'>$5/month</p>
                <ul className='list-disc list-inside mb-4 text-gray-600'>
                    <li>Access to basic servers</li>
                    <li>Standard speed</li>
                    <li>Basic support</li>
                </ul>
                <button className='bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition'>Select</button>
            </div>
            <div className='border p-6 rounded-lg shadow-md w-80'>
                <h2 className='text-2xl font-semibold mb-4'>Premium Plan</h2>
                <p className='text-gray-700 mb-4'>$15/month</p>
                <ul className='list-disc list-inside mb-4 text-gray-600'>
                    <li>Access to all servers</li>
                    <li>High speed</li>
                    <li>Priority support</li>
                </ul>
                <button className='bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition'>Select</button>
            </div>
        </div>


    </div>
  )
}

export default Plans