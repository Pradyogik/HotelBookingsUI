import React, { useState } from 'react';
import demo from "../../images/explore/demo.svg";
import mobileImage from "../../images/explore/Frame.svg";
import bgImage from "../../images/explore/Group.png";
import Apple from "../../images/shared/Apple.svg";
import Google from "../../images/shared/Google.png";

const Explore = () => {
    const [mobileNumber, setMobileNumber] = useState('');

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center bg-hero mt-10" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5)), url(${bgImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'left bottom',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="flex flex-col md:flex-row gap-6 items-center max-w-8xl px-6 md:px-20 py-12 md:py-0">
                <div className="md:w-1/2 lg:pr-32">
                    <h2 className="text-3xl lg:text-4xl text-center md:text-left text-black font-bold leading-tight">
                        Explore the spiritual land of Lord Ram, Ayodhya
                    </h2>
                    <h3 className="mt-4 md:mt-6 text-sm lg:text-md text-center md:text-left text-black font-light tracking-wide leading-relaxed">
                        Access over 30 popular Attractions, Live Events & Activities in Ayodhya City and so much more.
                    </h3>
                    <div className="mt-6 md:mt-10 flex flex-col md:flex-row items-center">
                        <input
                            type="number"
                            className="w-full md:w-auto px-4 py-3 rounded-full md:rounded-3xl font-semibold text-md bg-gray-300 text-white"
                            placeholder="Enter your Mobile Number"
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                        />
                        <button className="w-full md:w-auto mt-4 md:mt-0 md:ml-4 px-4 py-3 rounded-full md:rounded-3xl font-semibold text-md bg-[#B01432] text-white">
                            Send Link
                        </button>
                    </div>
                    <div className="flex items-center justify-center md:justify-start mt-6 md:mt-8">
                        <img src={mobileImage} alt="Mobile" className="w-2/3 md:w-auto pt-5" />
                        <div className="ml-4">
                            <a target="_blank" href="#">
                                <img src={Apple} alt="Google Play" className="w-28 h-20 md:w-40 md:h-24" />
                            </a>
                            <a target="_blank" href="#">
                                <img src={Apple} alt="App Store" className="w-28 h-20 md:w-40 md:h-24" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img src={demo} alt="Demo" className="w-full md:w-full max-w-[50rem] lg:w-auto" />
                </div>
            </div>
        </div>
    );
};

export default Explore;
