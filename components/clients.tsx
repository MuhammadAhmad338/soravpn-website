import React from 'react';

const Clients = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Header */}
      <div className="max-w-[600px] p-6 text-center">
        <p className="text-4xl font-bold">
          Trusted by thousands of{' '}
          <span className="text-orange-600 font-bold">Happy Customers</span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-600 max-w-2xl text-md text-center">
          These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
        </p>
      </div>

      {/* Feedback Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto px-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              <div className="ml-4 text-left">
                <p className="font-semibold text-gray-800">John Doe</p>
                <p className="text-sm text-gray-500">Customer #{i}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm text-left leading-relaxed">
              “This VPN has completely changed how I browse safely online. The
              connection is fast and stable. Totally recommend it!”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
