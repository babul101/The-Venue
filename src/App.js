import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';


import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'1500px' }}>
        <Header />
        <Element className='featured'>
          <Featured />
        </Element>

        <Element className='venueINFO'>
          <VenueInfo />
        </Element>

        <Element className='highlights'>
          <Highlight />
        </Element>

        <Element className='pricing'>
          <Pricing />
        </Element>
        <Element className='location'>
          <Location />
        </Element>
        
        <Footer />
      </div>
    );
  }
}

export default App;
