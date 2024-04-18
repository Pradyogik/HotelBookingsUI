import React from 'react';
import ScrollCards from '../ui/ScrollCards';
import Cards from '../ui/Card';

const data = {
    // title: "Search results are",
    items: [
        {
            image: "https://images.holyayodhya.com/images/hotel/965a12357ef6de702ee1b9cc8384153a.jpeg",
            pretitle: "Pretitle 1",
            title: "Title 1",
            subtitle: "Subtitle 1",
            price: "$2000"
        },
        {
            image: "https://images.holyayodhya.com/images/hotel/965a12357ef6de702ee1b9cc8384153a.jpeg",
            pretitle: "Pretitle 2",
            title: "Title 2",
            subtitle: "Subtitle 2",
            price: "$2500"
        },

    ]
};

const SearchResultPage = () => {
    return (
        <div className=''>
            <Cards data={data} />
        </div>
    );
};

export default SearchResultPage;

