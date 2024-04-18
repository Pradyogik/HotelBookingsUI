import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchContainer = () => {
    const [searchHotels, setSearchHotels] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState('');
    const navigate = useNavigate();

    const handleSearchHotelsChange = (e) => {
        setSearchHotels(e.target.value);
    };

    const handleCheckInDateChange = (e) => {
        setCheckInDate(e.target.value);
    };

    const handleCheckOutDateChange = (e) => {
        setCheckOutDate(e.target.value);
    };

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
    };

    const handleSearch = () => {
        // Validation logic
        if (searchHotels.trim() === '' || checkInDate === '' || checkOutDate === '' || guests === '') {
            // If any field is empty, display an alert or error message
            alert('Please fill in all fields');
            return;
        }

        // If all fields are filled, redirect to SearchResults page
        navigate('/search', { state: { checkInDate, checkOutDate, guests } });
    };

    return (
        <div className="flex justify-center">
            <div className="bg-white w-full sm:w-5/6 md:w-4/6 lg:w-3/4 xl:w-11/12 font-poppins rounded-3xl shadow-xl p-4">
                <div className="flex flex-wrap items-center justify-center sm:justify-between">
                    <div className="w-full sm:w-auto flex-1 sm:px-4  sm:border-r border-black mb-4 sm:mb-0">
                        <label className="block text-left mb-2 font-medium text-sm sm:text-md xl:text-md text-black" htmlFor="searchHotels">Search where are you gonna stay?</label>
                        <input
                            type="text"
                            id="searchHotels"
                            placeholder='Search by hotel or neighbourhood'
                            className="w-full px-4 text-sm py-4 mb-2 border border-black rounded-md"
                            value={searchHotels}
                            onChange={handleSearchHotelsChange}
                        />
                    </div>
                    <div className="w-full sm:w-auto flex-1 sm:px-4  sm:border-r border-black mb-4 sm:mb-0">
                        <label className="block mb-2 text-left font-medium text-sm sm:text-sm text-black" htmlFor="checkInDate">Check-In Date</label>
                        <input
                            type="date"
                            id="checkInDate"
                            className="w-full px-4 py-4 mb-2 border border-black rounded-md"
                            value={checkInDate}
                            onChange={handleCheckInDateChange}
                        />
                    </div>
                    <div className="w-full sm:w-auto flex-1 sm:px-4  sm:border-r border-black mb-4 sm:mb-0">
                        <label className="block mb-2 font-medium text-left text-sm sm:text-sm text-black" htmlFor="checkOutDate">Check-Out Date</label>
                        <input
                            type="date"
                            id="checkOutDate"
                            className="w-full px-4 py-4 mb-2 border border-black rounded-md"
                            value={checkOutDate}
                            onChange={handleCheckOutDateChange}
                        />
                    </div>
                    <div className="w-full sm:w-auto flex-1 sm:px-4  sm:border-r border-black mb-4 sm:mb-0">
                        <label className="block mb-2 font-medium  text-left text-md md:text-sm text-black" htmlFor="guests">Guests</label>
                        <input
                            type="number"
                            id="guests"
                            className="w-full px-4 py-4 border mb-2 border-black rounded-md"
                            value={guests}
                            onChange={handleGuestsChange}
                        />
                    </div>
                    <div className="flex items-end px-2 mt-4 sm:mb-0">
                        <button className="bg-[#B01432] text-sm sm:text-base text-white px-6 py-4 rounded-md" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchContainer;
