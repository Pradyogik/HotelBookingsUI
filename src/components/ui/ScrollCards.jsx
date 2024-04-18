import React from 'react';

const ScrollCards = ({ data }) => {
    return (
        <div>
            <div className="flex flex-col bg-white m-auto p-auto">
                <div className="flex justify-between py-5 lg:px-3 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5">
                    <h1 className="font-medium font-poppins text-2xl text-gray-800">
                        {data.title}
                    </h1>
                    <button className="text-[#B01432]  font-poppins text-xl font-bold py-2 px-4 rounded">
                        See All
                    </button>
                </div>
                <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                    <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
                        {data.items.map((item, index) => (
                            <div className="inline-block px-3" key={index}>
                                <div className="w-96 border border-[#FD7E14] max-w-xs overflow-hidden rounded-3xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <div className="px-4 py-4 border-gray-300">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-[250px] object-cover border-2  rounded-2xl"
                                        />
                                    </div>
                                    <div className="p-4  font-inter">
                                        <p className="font-bold text-xs text-gray-500">{item.pretitle}</p>
                                        <h2 className="font-bold text-xl text-gray-800">{item.title}</h2>
                                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                                        <div className="flex justify-center items-center mt-4">
                                            <span className="font-bold text-xl text-gray-800">{item.price} <span className='font-[300] text-sm text-black'>/night</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n"
                }}
            />
        </div>
    );
};

export default ScrollCards;
