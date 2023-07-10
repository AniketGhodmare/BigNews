// import logo from './logo.svg';
// pass Aniket@Api@123
import './App.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import NewsSec from './components/NewsSec';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';
import Homepage from './components/homepage/Homepage';
import Topbar from './components/topbar/Topbar';
import TopAd from './components/topAd/TopAd';


const App = () => {
  const pageSize = 50;
  const apiKey = process.env.REACT_APP_NEWS_API
  const country = 'in'
  const [progress, Setprogress] = useState([10])

  return (
    <div>
      <Router>
        <Topbar />
        <TopAd />
        {/* <LoadingBar height={3} color='#f11946' progress={progress} /> */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/general" element={<NewsSec progress={Setprogress} key="general" country={country} category='general' pageSize={pageSize} apiKey={apiKey} />} />
          <Route exact path="/Business" element={<NewsSec progress={Setprogress} key="business" country={country} category='business' pageSize={pageSize} apiKey={apiKey} />} />
          <Route exact path="/Entertainment" element={<NewsSec progress={Setprogress} key="entertainment" country={country} category='entertainment' pageSize={pageSize} apiKey={apiKey} />} />
          <Route exact path="/Health" element={<NewsSec progress={Setprogress} key="health" country={country} category='health' pageSize={pageSize} apiKey={apiKey} />} />
          <Route exact path="/Science" element={<NewsSec progress={Setprogress} key="science" country={country} category='science' pageSize={pageSize} apiKey={apiKey} />} />
          <Route exact path="/Sports" element={<NewsSec progress={Setprogress} key="sports" country={country} category='sports' pageSize={pageSize} apiKey={apiKey} />} />
          <Route exact path="/Technology" element={<NewsSec progress={Setprogress} key="technology" country={country} category='technology' pageSize={pageSize} apiKey={apiKey} />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App
