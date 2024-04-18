import React from 'react'
import SearchHero from '../components/SearchResults/Components/SearchHero'
import Filter from '../components/SearchResults/Components/Filter'
import Index from '../components/SearchResults/Index'
import Explore from '../components/Home/Explore'
import Footer from '../components/shared/Footer'
import Features from '../components/Home/Features'

const SearchResults = () => {
    return (
        <div>
            <SearchHero />
            <Index />
            <Features />
            <Explore />
            <Footer />
        </div>
    )
}

export default SearchResults