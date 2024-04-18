import React from 'react'
import Hero from '../components/shared/hero'
import SearchContainer from '../components/Searchengine/SearchContainer'
import TrendingProperties from '../components/Home/TrendingProperties'
import SponsoredHS from '../components/Home/SponsoredHomestays'
import Features from '../components/Home/Features'
import Explore from '../components/Home/Explore'
import Footer from '../components/shared/Footer'

const Home = () => {
    return (
        <div>
            <div className="relative">
                <Hero />
                <div className="absolute top-full w-full transform -translate-y-1/2">
                    <SearchContainer />
                </div>
            </div>
            <TrendingProperties />
            <SponsoredHS />
            <Features />
            <Explore />
            <Footer />
        </div>
    )
}

export default Home