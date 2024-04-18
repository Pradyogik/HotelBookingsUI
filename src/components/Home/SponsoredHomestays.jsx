import React from 'react';
import ScrollCards from '../ui/ScrollCards';

const data = {
    title: "Sponsered Homestays ",
    items: [

        {
            image: "https://source.unsplash.com/random/?hotel",
            pretitle: "Homestays",
            title: "The Mansarovar Paying Guest House",
            subtitle: "Beniganj, Panchkosi Parkrama Marg, Near Gupta Hotel, Ayodhya",
            price: "$2000"
        },

        {
            image: "https://source.unsplash.com/random/?hotel",
            pretitle: "Homestays",
            title: "The Mansarovar Paying Guest House",
            subtitle: "Beniganj, Panchkosi Parkrama Marg, Near Gupta Hotel, Ayodhya",
            price: "$2500"
        },
        {
            image: "https://source.unsplash.com/random/?hotel",
            pretitle: "Homestays",
            title: "The Mansarovar Paying Guest House",
            subtitle: "Beniganj, Panchkosi Parkrama Marg, Near Gupta Hotel, Ayodhya",
            price: "$3000"
        },
        {
            image: "https://source.unsplash.com/random/?hotel",
            pretitle: "Homestays",
            title: "The Mansarovar Paying Guest House",
            subtitle: "Beniganj, Panchkosi Parkrama Marg, Near Gupta Hotel, Ayodhya",
            price: "$3500"
        },
        {
            image: "https://source.unsplash.com/random/?hotel",
            pretitle: "Homestays",
            title: "The Mansarovar Paying Guest House",
            subtitle: "Beniganj, Panchkosi Parkrama Marg, Near Gupta Hotel, Ayodhya",
            price: "$4000"
        },
        {
            image: "https://source.unsplash.com/random/?hotel",
            pretitle: "Homestays",
            title: "The Mansarovar Paying Guest House",
            subtitle: "Beniganj, Panchkosi Parkrama Marg, Near Gupta Hotel, Ayodhya",
            price: "$4500"

        }
    ]
};

const SponsoredHS = () => {
    return (
        <div className='mb-4'>
            <ScrollCards data={data} />
        </div>
    );
};

export default SponsoredHS;

