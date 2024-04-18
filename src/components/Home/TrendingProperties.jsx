import React from 'react';
import ScrollCards from '../ui/ScrollCards';

const data = {
    title: "Trending Properties in Shree Ayodhya Ji.",
    items: [
        {
            image: "https://source.unsplash.com/random/?hotel",
            pretitle: "Pretitle 1",
            title: "Title 1",
            subtitle: "Subtitle 1",
            price: "$2000"
        },
        {
            image: "https://source.unsplash.com/random/?hotel",
            pretitle: "Pretitle 2",
            title: "Title 2",
            subtitle: "Subtitle 2",
            price: "$2500"
        },
        {
            image: "https://source.unsplash.com/random/?hotel",
            pretitle: "Pretitle 3",
            title: "Title 3",
            subtitle: "Subtitle 3",
            price: "$3000"
        },
        {
            image: "https://source.unsplash.com/random/?hotel",
            pretitle: "Pretitle 4",
            title: "Title 4",
            subtitle: "Subtitle 4",
            price: "$3500"
        },
        {
            image: "https://source.unsplash.com/random/?hotel",
            pretitle: "Pretitle 5",
            title: "Title 5",
            subtitle: "Subtitle 5",
            price: "$4000"
        },
        {
            image: "https://source.unsplash.com/random/?hotel",
            pretitle: "Pretitle 6",
            title: "Title 6",
            subtitle: "Subtitle 6",
            price: "$4500"
        }
    ]
};

const TrendingProperties = () => {
    return (
        <div className='mt-24'>
            <ScrollCards data={data} />
        </div>
    );
};

export default TrendingProperties;

