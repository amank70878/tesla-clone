import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Section from './Components/Section';

function App() {
  return (
    <>
      <Header/>

      <Section 
        title='Modle 3'
        desc='Schedule a Test Drive'
        leftbtn='Buy Now'
        rightbtn='Custom Order'
        imgsrc= 'tesla_bg1.jpg'
        imgsrcR= 'tesla_bg_responsive1.jpeg'
      />
      
      <Section 
        title='Modle Y'
        desc='Schedule a Test Drive'
        leftbtn='Buy Now'
        rightbtn='Custom Order'
        imgsrc= 'tesla_bg2.jpg'
        imgsrcR= 'tesla_bg_responsive2.jpeg'
      />

      <Section 
        title='Modle S'
        desc='Schedule a Test Drive'
        leftbtn='Buy Now'
        rightbtn='Custom Order'
        imgsrc= 'tesla_bg3.jpg'
        imgsrcR= 'tesla_bg_responsive3.jpeg'
      />

      <Section 
        title='Modle X'
        desc='Schedule a Test Drive'
        leftbtn='Buy Now'
        rightbtn='Custom Order'
        imgsrc= 'tesla_bg4.jpg'
        imgsrcR= 'tesla_bg_responsive4.jpeg'
      />

      <Section 
        title='Solar Panels'
        desc='Lowest Cost Solar Panels in America'
        textBig={true}
        leftbtn='Order Now'
        rightbtn='Learn More'
        imgsrc= 'tesla_bg5.jpg'
        imgsrcR= 'tesla_bg_responsive5.jpeg'
      />

      <Section 
        title='Solar Roof'
        desc='Produce Clean Energy From Your Roof'
        textBig={true}
        leftbtn='Order Now'
        rightbtn='Learn More'
        imgsrc= 'tesla_bg6.webp'
        imgsrcR= 'tesla_bg_responsive6.webp'
      />
      
      <Section 
        title='Accessories'
        leftbtn='Shop Now'
        imgsrc= 'tesla_bg7.jpg'
        imgsrcR= 'tesla_bg_responsive7.jpeg'
      />

      <Footer/>

    </>
  );
}

export default App;
