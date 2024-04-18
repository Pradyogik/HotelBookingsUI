import ListingDescriptionPopup from "./ListingDescriptionPopup";
import { amenities } from "./amenitiesApi";
import Map from "./Map";
import ListingRooms from "./ListingRooms";

import { AiOutlineRight } from "react-icons/ai";

const ListingDescriptions = () => {
    const listingData = {
        location: {
            city: {
                latitude: 37.7749,
                longitude: -122.4194,
            },
        },
        floorPlan: {
            guests: 4,
            bedrooms: 2,
            beds: 2,
            bathroomsNumber: 1,
        },
        description: "Get the celebrity treatment with world-class service at ITC Royal Bengal, a Luxury Collection Hotel, Kolkata\n\nSituated in Kolkata, 4.5 km from Sealdah Railway Station, ITC Royal Bengal, a Luxury Collection Hotel, Kolkata features accommodation with a fitness centre, free private parking, a garden an...",
        amenities: ["Washer", "Kitchen", "Parking, Washer"],
    };

    const author = {
        name: {
            ownerName: "Amar Bahadur Singh",
        },
        profileImg: "https://images.holyayodhya.com/images/hotel/6d18c9c4ba35057689462b15bb1f097b.jpeg",
    };

    const latLong = [listingData?.location?.city?.latitude, listingData?.location?.city?.longitude];
    const latLongNaN = isNaN(latLong[0]) || isNaN(latLong[1]);

    return (
        <>
            <div className="flex flex-row justify-between items-center max-h-16">
                <div className="flex flex-col font-poppins gap-1 text-[#222222]">
                    <h2 className="text-xl md:text-[22px] font-medium">
                        Entire Cabin is hosted by {author?.name?.ownerName}
                    </h2>
                    <p className="text-sm md:text-base">
                        {listingData?.floorPlan?.guests} guests ·{" "}
                        {listingData?.floorPlan?.bedrooms} bedroom ·{" "}
                        {listingData?.floorPlan?.beds} beds ·{" "}
                        {listingData?.floorPlan?.bathroomsNumber} bath
                    </p>
                </div>

            </div>
            <hr className="h-[1.2px] w-full font-poppins bg-[#dddddd] my-8" />

            <div className="flex items-center">
                <div>
                    {author?.profileImg ? (
                        <img
                            src={author?.profileImg}
                            alt="user"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                    ) : (
                        <div className="w-14 h-14 bg-[#222222] flex items-center justify-center rounded-full">
                            <p className="text-[#efefef] text-lg font-semibold">
                                {author?.name?.ownerName?.slice(0, 1)}
                            </p>
                        </div>
                    )}
                </div>
                <div className="ml-4">
                    <h4 className="text-[#222222] text-lg font-poppins font-bold">Hosted by  {author?.name?.ownerName}</h4>
                    <p className="text-gray-700 text-sm font-poppins font-regular">10 Years of hosting</p>
                </div>
            </div>
            <hr className="h-[1.2px] w-full font-poppins bg-[#dddddd] my-8" />
            <div>
                <p className="whitespace-pre-wrap font-poppins">
                    {listingData?.description?.slice(0, 300)}...
                </p>
            </div>
            <button
                className="flex pt-7 underline font-poppins text-black font-medium items-center gap-1 max-w-[120px]"
                onClick={() => document.getElementById("listing_modal").showModal()}
            >
                Show more
                <AiOutlineRight size={18} />
            </button>
            <hr className="h-[1.2px] w-full bg-[#dddddd] my-8" />
            <div className="mb-4">
                <h2 className="text-2xl font-poppins font-medium mb-4">Where to Stay</h2>
                <ListingRooms />
            </div>
            <hr className="h-[1.2px] w-full bg-[#dddddd] my-8" />

            <div className="flex flex-col gap-6">
                <h2 className="text-[22px] font-poppins text-[#222222] font-medium">
                    What this place offers
                </h2>
                <div className="grid grid-cols-2 gap-x-3 md:gap-x-0 gap-y-4">
                    {amenities.map((item, i) => {
                        if (listingData?.amenities?.includes(item?.name)) {
                            return (
                                <div key={i} className="flex flex-row gap-4 items-center">
                                    <item.svg size={26} opacity={0.8} />
                                    <p className="text-xs sm:text-sm md:text-base text-[#222222]">
                                        {item?.name}
                                    </p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <hr className=" h-[1.2px] w-full bg-[#dddddd] my-8" />

            {/* location of the listing */}
            <div className=" flex flex-col gap-6">
                <h2 className="text-[22px] font-poppins text-[#222222] font-medium">
                    Where you&apos;ll be
                </h2>
                {/* map */}
                <div className="w-full min-h-[400px]">
                    {!latLongNaN && (
                        <Map latAndLong={latLong} zoom={6} key="listingMap" />
                    )}
                </div>
            </div>
            <hr className="h-[1.2px] w-full bg-[#dddddd] my-8" />
            <ListingDescriptionPopup description={listingData?.description} />
        </>
    );
};

export default ListingDescriptions;
