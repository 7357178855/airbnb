"use client";
import "./card.css"
import { Link } from 'react-router-dom';

import React from 'react';

export default function Card({ id, name, location, rating, builtYear, availability, chargePerNight,type,imageUrl,bb,cc,dd,ee,onClick }) {
    return (
        <div className="fullcard" onClick={onClick}>
        <div className="cardimage">
          <img src={imageUrl} alt="Hotel Image" /> {/* Add an alt attribute for accessibility */}
        </div>
        <div className="carddetails">
          <div className="sameline">
            <p>{location}</p>
            <p>Star {rating}</p>
          </div>
          <p>Built in {builtYear}</p>
          <p>{availability}</p>
          

          <div className="sameline">
          <p><b>{chargePerNight}</b> night</p>
          <Link to={`/hotel-details/${id}`} className="linki">View Details</Link>
          </div>
        
        </div>
      </div>
  
    )
  }
