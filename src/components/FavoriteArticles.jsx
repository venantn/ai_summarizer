import React, { useState } from 'react';

const FavoriteArticles = ({ favorites }) => {
  return (
    <div className="favorite-articles mb-12">
      <h2 className='py-4 font-santoshi font-bold text-gray-600 text-xl'>
        Favorite <span className='blue_gradient'>Articles</span>
        </h2>  
      
      {favorites.length === 0 && <p>No favorite articles yet.</p>}
      {favorites.map((articleUrl, index) => (
        <div key={index} className="link_card mb-1 ">
          <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>{articleUrl}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoriteArticles;
