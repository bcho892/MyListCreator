import React from 'react';
import './home.css';
import Menu from '../../menu/Menu';
import Header from '../../header/Header';
import Collection from '../collection/Collection'


function Home() {
  return (
    <div>
      <Header />
      <div className="maincontainer">
        <span className='side'><Menu /></span>
        <div className="main"><Collection /></div>
      </div>
    </div>
  );
}

export default Home;
