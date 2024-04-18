import React, { useState } from "react";
import { amenities } from "./amenitiesApi"; // Update the path accordingly

const ListingRooms = ({ image, title, roomSize, price, amenities, isSelected, onSelect }) => {
    const [isBannerVisible, setIsBannerVisible] = useState(false);

    const handleBookNow = () => {
        setIsBannerVisible(true);
        onSelect(title);
    };

    return (
        <div className={`max-w-3/4 w-3/4 mx-auto font-poppins bg-white rounded-xl shadow-md overflow-hidden border-2 mb-2 ${isSelected ? 'border-[#FD7E14]' : ''}`}>
            <div className="flex">
                <div className="flex-grow p-4">
                    <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                    <p className="mt-1 text-sm text-gray-500">{roomSize}</p>
                    <div className="mt-2 flex justify-between items-center">
                        <div className="flex items-center">
                            <ul className="flex items-center space-x-2 text-sm text-gray-600">
                                {amenities.map((amenity) => {
                                    const Icon = amenity.svg;
                                    return (
                                        <li key={amenity.id}>
                                            <Icon className="h-6 w-6" title={amenity.name} />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <img
                    className="h-32 w-48 px-2 py-2 rounded-xl object-cover"
                    src={image}
                    alt="Room"
                />
            </div>
            <hr className="h-[1.2px] w-full bg-[#dddddd] my-2" />

            <div className="px-4 py-3 bg-white flex justify-between items-center">
                <p className="text-lg font-bold text-gray-800">₹{price}/night</p>
                <button
                    onClick={handleBookNow}
                    className={`px-4 py-2 text-lg font-semibold rounded focus:outline-none ${isSelected
                        ? "bg-red-600 text-white border-none"
                        : "bg-white text-red-400 border border-red-500 hover:bg-red-600 hover:text-white"
                        }`}
                >
                    {isSelected ? "Booked" : "Book now"}
                </button>
            </div>
            {isSelected && isBannerVisible && (
                <div className="bg-gradient-to-r from-green-600 via-green-400 to-green-800 text-white font-bold text-center py-2">
                    🎉 Selected Category: {title}
                </div>
            )}
        </div>
    );
};

const ListingRoomsDemo = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);

    const handleSelectRoom = (title) => {
        setSelectedRoom(title);
    };

    return (
        <div className="flex flex-col space-y-4">
            <ListingRooms
                image="https://images.holyayodhya.com/images/hotel/1b3d6bc975774b0858a81bfaf2f4ef9d.jpeg"
                title="Classic"
                roomSize="Room size: 100 sqft"
                price="100"
                amenities={[amenities[0], amenities[1]]}
                isSelected={selectedRoom === "Classic"}
                onSelect={handleSelectRoom}
            />
            <ListingRooms
                image="https://images.holyayodhya.com/images/hotel/1f65d3a38758a58c5cb62b8bc8dddd2c.jpeg"
                title="Deluxe"
                roomSize="Room size: 400 sqft"
                price="80"
                amenities={[amenities[2], amenities[3], amenities[4], amenities[10]]}
                isSelected={selectedRoom === "Deluxe"}
                onSelect={handleSelectRoom}
            />
        </div>
    );
};

export default ListingRoomsDemo;
