import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

const ListingTitle = () => {
    const listingData = {
        title: "Beautiful Beach House",
        ratings: 4.5,
        reviews: 25,
        location: {
            addressLineOne: "123 Ocean Drive",
            addressLineTwo: "Miami, FL",
            country: { name: "India" },
        },
    };

    return (
        <div className="flex flex-col text-[#222222]">
            {/* title */}
            <p className="text-xl md:text-2xl font-poppins font-medium">{listingData?.title}</p>
            <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-end">
                <div className="flex flex-row flex-wrap md:flex-nowrap items-center gap-2 col-span-4">
                    {/* ratings */}
                    <p className="flex flex-row font-poppins items-center gap-1">
                        <AiFillStar size={16} />
                        <p className="text-xs font-poppins sm:text-sm">{listingData?.ratings}</p>
                    </p>
                    <span> · </span>
                    <p className="text-xs font-poppins sm:text-sm">
                        {listingData?.reviews ? listingData?.reviews : "No reviews"}
                    </p>
                    <span> · </span>
                    {/* location */}
                    <p className="text-xs sm:text-sm font-poppins font-medium underline">
                        {listingData?.location?.addressLineOne
                            ? listingData?.location?.addressLineOne
                            : listingData?.location?.addressLineTwo
                                ? listingData?.location?.addressLineTwo
                                : listingData?.location?.country?.name}
                    </p>
                </div>
                {/* save wishlist options */}
                <div className="col-span-1 md:flex justify-end w-full hidden">
                    <div className="flex flex-row-reverse gap-2 items-center cursor-pointer p-2 rounded-md w-[80px] bg-white hover:bg-[#f1f1f1] transition duration-200 ease-in">
                        <p className="text-sm font-poppins underline underline-offset-1 font-medium">
                            Save
                        </p>
                        <AiOutlineHeart size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingTitle;
