// components/ThreeColumnSection.js
import React from 'react';

const Services = () => {
  return (
    <div>
        <div className="flex justify-center gap-x-3">
            <div className="flex flex-wrap w-full sm:w-2/3 lg:w-1/2">
                <div className="w-full sm:w-1/2 md:w-1/3 p-4 bg-cyan-700">
                {/* Column 1 Content */}
                <p className="text-lg font-semibold">Place One</p>
                {/* Add your content here */}
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 p-4 bg-orange-800">
                {/* Column 2 Content */}
                <p className="text-lg font-semibold">Place 2</p>
                {/* Add your content here */}
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                {/* Column 3 Content */}
                <p className="text-lg font-semibold">Explore Amazing Places</p>
                <p>We use ads to keep our content free for you.Please allow ads and let sponsors fund your surfing.Thank you!</p>
                {/* Add your content here */}
                </div>
            </div>
        </div>
        <div className='p-5 text-center'>
            <h1>Heading</h1>
        </div>
        <div className="flex justify-center gap-x-3">
            <div className="flex flex-wrap w-full sm:w-2/3 lg:w-1/2">
                <div className="w-full sm:w-1/2 md:w-1/3 p-4 ">
                {/* Column 1 Content */}
                <h2>Recomended</h2>
                <p>We use ads to keep our content free for you.Please allow ads and let sponsors fund your surfing.Thank you!</p>
                {/* Add your content here */}
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 p-4 ">
                {/* Column 1 Content */}
                <h2>Recomended</h2>
                <p>We use ads to keep our content free for you.Please allow ads and let sponsors fund your surfing.Thank you!</p>
                {/* Add your content here */}
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 p-4 ">
                {/* Column 1 Content */}
                <h2>Recomended</h2>
                <p>We use ads to keep our content free for you.Please allow ads and let sponsors fund your surfing.Thank you!</p>
                {/* Add your content here */}
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Services;
