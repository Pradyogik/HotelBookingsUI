import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults"; // Import the SearchResults component
import Listing from "./Pages/Listing";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />{" "}
          <Route path="/listings" element={<Listing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
