import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Cards = ({ data }) => {
    return (
        <div className="flex flex-col bg-white m-auto p-auto">
            <div className="flex justify-between py-5 lg:px-3 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5">
                <h1 className="font-medium font-poppins text-2xl text-gray-800">
                    {data.title}
                </h1>
                <button className="focus:outline-none">
                    <XMarkIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                </button>
            </div>
            <div className="flex flex-wrap justify-start pb-10">
                {data.items.map((item, index) => (
                    <div className="px-3 mb-4" key={index}>
                        <div className="w-96 border border-[#FD7E14] max-w-xs overflow-hidden rounded-3xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <div className="px-4 py-4 border-gray-300">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[250px] object-cover border-2 rounded-2xl"
                                />
                            </div>
                            <div className="p-4  font-inter">
                                <p className="font-bold text-xs text-gray-500">{item.pretitle}</p>
                                <h2 className="font-bold text-xl text-gray-800">{item.title}</h2>
                                <p className="text-sm text-gray-500">{item.subtitle}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="font-bold text-xl text-gray-800">{item.price}<span className='text-sm font-regular text-[#1E1E1E] '>/night</span></span>
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.502 21.2319C19.1014 25.883 16.7113 27.7821 11.4789 27.7821H11.311C5.53596 27.7821 3.22336 25.4695 3.22336 19.6945V11.2839C3.22336 5.50888 5.53596 3.19629 11.311 3.19629H11.4789C16.6726 3.19629 19.0627 5.06962 19.489 9.64313" stroke="#1E1E1E" stroke-width="1.93793" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.6208 15.4951H26.3232" stroke="#1E1E1E" stroke-width="1.93793" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M23.4425 19.8236L27.7705 15.4955L23.4425 11.1675" stroke="#1E1E1E" stroke-width="1.93793" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
