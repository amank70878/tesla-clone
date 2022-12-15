import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';

function App() {
  return (
    <>
      <Header/>

      <Section 
        title='Modle 3'
        desc='Schedule a Test Drive'
        leftbtn='Custom Order'
        rightbtn='Existing Inventory'
        imgsrc= 'tesla_bg1.jpg'
      />
      
      <Section 
        title='Modle Y'
        desc='Schedule a Test Drive'
        leftbtn='Custom Order'
        rightbtn='Existing Inventory'
        imgsrc= 'tesla_bg2.jpg'
      />

      <Section 
        title='Modle S'
        desc='Schedule a Test Drive'
        leftbtn='Custom Order'
        rightbtn='Existing Inventory'
        imgsrc= 'tesla_bg3.jpg'
      />

      <Section 
        title='Modle X'
        desc='Schedule a Test Drive'
        leftbtn='Custom Order'
        rightbtn='Existing Inventory'
        imgsrc= 'tesla_bg4.jpg'
      />

      <Section 
        title='Solar Panels'
        desc='Lowest Cost Solar Panels in America'
        leftbtn='Order Now'
        rightbtn='Learn More'
        imgsrc= 'tesla_bg5.jpg'
      />

      <Section 
        title='Solar Roof'
        desc='Produce Clean Energy From Your Roof'
        leftbtn='Order Now'
        rightbtn='Learn More'
        imgsrc= 'tesla_bg6.webp'
      />
      
      <Section 
        title='Accessories'
        leftbtn='Shop Now'
        imgsrc= 'tesla_bg7.jpg'
      />

    </>
  );
}

export default App;
