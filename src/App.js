import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar";
import SearchPage from './SearchPage';
import RecommendedVideos from "./RecommendedVideos";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
        <Routes>
          
          <Route path="/search/:searchTerm" element={<div>
            <div className="app_page">
             <Sidebar/>
             <SearchPage />
            </div>
            </div>} />
            {/* <h1>Search paage </h1> */}
            

          <Route path="/" element={<div className="app_page">
            {/* <div className="app_page"> */}
             <Sidebar/>
             <RecommendedVideos/>
            </div>}
          />

        </Routes>
      </Router>
      
    
    
    </div>
  );
}

export default App;
