import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({reviewCard}) => {

  
    // "date": "2024-05-08T14:30:00.000Z"
const {userName,user_photoURL,review, } = reviewCard;

    return (
     <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
      {/* Quote Icon and Text Section */}
      <div className="space-y-4">
        {/* The large, light quote icon */}
        <FaQuoteLeft className="text-5xl text-teal-200/50" /> 
        
        {/* The quote text */}
        <p className="text-gray-700 leading-relaxed italic text-lg">
          {review}
        </p>
      </div>

      {/* Separator Line */}
      <div className="my-6 border-t border-dashed border-gray-200"></div>

      {/* Author Section */}
      <div className="flex items-center space-x-4">
        {/* Profile 'Image' Placeholder - matching the dark teal color */}
        <div className="w-12 h-12 bg-teal-800 rounded-full flex-shrink-0">
        <img src={user_photoURL} alt="" />
        </div> 
        
        {/* Name and Title */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{userName}</h3>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
    );
};

export default ReviewCard;