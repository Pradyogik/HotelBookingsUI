import React from 'react'
import ListingTitle from '../components/ListingDetails/ListingTitle'
import ListingsPhotos from '../components/ListingDetails/ListingPhotos'
import ListingDescriptions from '../components/ListingDetails/ListingDescriptions'
import ReservationCard from '../components/ListingDetails/ReservationCard'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

const Listing = () => {
    return (
        <div>
            <Navbar />

            <main className="max-w-screen-2xl xl:px-8 mx-auto py-7 px-5 sm:px-16 md:px-8">
                <section className=" flex flex-col-reverse md:flex-col gap-7">
                    {/* listing title & wishlist */}
                    <ListingTitle />
                    {/* listing photos */}
                    <ListingsPhotos />
                </section>
                <section className=" grid grid-cols-1 md:grid-cols-8 lg:grid-cols-6 md:gap-x-8 lg:gap-x-20 pt-8 sm:pt-12 md:pt-16">
                    {/* listings description and details */}
                    <div className="md:col-span-5 lg:col-span-4 order-2 md:order-1 flex flex-col min-h-[800px] pt-16 sm:pt-20 md:pt-0">
                        <ListingDescriptions

                        />
                    </div>
                    {/* reservations of the listing */}
                    <div className="md:col-span-3 lg:col-span-2 order-1 md:order-2 max-h-[900px]">
                        <ReservationCard />
                    </div>
                </section>
            </main>
            <Footer />
        </div>

    );
};


export default Listing