import React from 'react';
import Navbar from './Navbar';
import HeroSvg from "../../images/Hero.svg"; // Import the SVG file

const Hero = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-50 flex items-center">
                <section
                    className="w-full bg-cover bg-center py-32 relative"
                    style={{ backgroundImage: `url(${HeroSvg})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="container mx-auto text-center text-white relative">
                        <h1 className="text-4xl font-laila font-medium mb-6">Over <span className='text-[#FDDF2E]'>600+ homestays</span>, hotels and dormatoeries across <span className='text-[#FDDF2E]'>Shree Ayodhya ji</span></h1>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Hero;