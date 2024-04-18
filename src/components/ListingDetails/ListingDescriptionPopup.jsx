const ListingDescriptionPopup = () => {
    return (
        <>
            <dialog id="listing_modal" className="modal rounded-3xl">
                <form method="dialog" className="absolute right-4 top-4">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost">
                        ✕
                    </button>
                </form>
                <div className="modal-box mx-auto w-11/12 max-w-4xl p-6">
                    <div className="pt-16">
                        <h3 className="font-bold font-poppins text-2xl mb-4">About this place</h3>
                        <p
                            className="py-4 font-poppins whitespace-pre-wrap mb-4"
                            style={{
                                color: 'GrayText'
                            }}
                        >
                            Get the celebrity treatment with world-class service at ITC Royal Bengal, a Luxury Collection Hotel, Kolkata
                        </p>
                        <p className="py-4 font-poppins whitespace-pre-wrap mb-4">
                            Situated in Kolkata, 4.5 km from Sealdah Railway Station, ITC Royal Bengal, a Luxury Collection Hotel, Kolkata features accommodation with a fitness centre, free private parking, a garden and a restaurant. With a bar, the 5-star hotel has air-conditioned rooms with free WiFi, each with a private bathroom. The accommodation offers room service, a 24-hour front desk and currency exchange for guests.
                        </p>
                        <p className="py-4 font-poppins whitespace-pre-wrap mb-4">
                            At the hotel, each room comes with a desk and a flat-screen TV. Some rooms are fitted with a kitchen with a fridge, a dishwasher and an oven. At ITC Royal Bengal, a Luxury Collection Hotel, Kolkata the rooms include bed linen and towels.
                        </p>
                        <p className="py-4 font-poppins whitespace-pre-wrap mb-4">
                            At the accommodation guests are welcome to take advantage of a sauna.
                        </p>
                        <p className="py-4 font-poppins whitespace-pre-wrap mb-4">
                            M G Road Metro Station is 6.4 km from ITC Royal Bengal, a Luxury Collection Hotel, Kolkata, while New Market is 6.6 km from the property. The nearest airport is Netaji Subhash Chandra Bose International, 15 km from the hotel, and the property offers a paid airport shuttle service.
                        </p>
                        <p className="py-4 font-poppins whitespace-pre-wrap mb-4">
                            Couples particularly like the location — they rated it 8.9 for a two-person trip.
                        </p>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default ListingDescriptionPopup;