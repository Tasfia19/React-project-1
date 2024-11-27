import React from 'react'

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className='para'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
           <div className='btn'>
             <button>Shop Now</button> 
            <button className='secondary-btn'>Category</button> 
            </div>
            <p>Also Available ON</p>
             <div className='icons'>
            <img src='/images/flipkart.png' alt="flipkart logo"/>
            <img src='/images/amazon.png' alt='amazon logo'/> 
           </div>
               </div>
           <div className='image'>
            <img src='/images/shoe_image.png' alt="shoe"/>
            </div>
            </div>
  );
};

export default Hero;