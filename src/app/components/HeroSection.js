// components/TwoColumnSection.js
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="container-lg flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
        <h1>START YOUR JOURNEY WITH FAIE</h1>
        <p>We use ads to keep our content free for you.Please allow ads and let sponsors fund your surfing.Thank you!</p>
        <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Plan your trip now</button>
      </div>
      <div className="md:w-1/2 p-4">
        <Image
        src="/public/hero image.png" // Path to your image inside the public folder
        alt="Description of the image"
        width={500} // Desired width of the image
        height={300} // Desired height of the image
      />
      </div>
    </div>
  );
};

export default HeroSection;
