import React from 'react';
import Navbar from '../../shared/Navbar';
import HeroSvg from "../../../images/Hero.svg";
import SearchContainer from '../../Searchengine/SearchContainer';

const SearchHero = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-50 flex items-center">
                <section
                    className="w-full bg-cover bg-center py-32 relative"
                    style={{ backgroundImage: `url(${HeroSvg})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className=" mx-auto text-center text-black font-medium relative">
                        <SearchContainer />
                    </div>
                </section>
            </div>
        </>
    );
};

export default SearchHero;