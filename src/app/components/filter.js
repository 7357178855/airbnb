// FilterOptions.js
import React from 'react';
import './FilterOptions.css';
import { SvgIcon } from '@mui/material';

import { useRef } from 'react';

import CastleIcon from '@mui/icons-material/Castle';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import HomeIcon from '@mui/icons-material/Home';
import WavesIcon from '@mui/icons-material/Waves';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ExploreIcon from '@mui/icons-material/Explore';
import CabinIcon from '@mui/icons-material/Cabin';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import WeekendIcon from '@mui/icons-material/Weekend';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FlightIcon from '@mui/icons-material/Flight';


const TypeIconMap = {
  castle: <SvgIcon component={CastleIcon} style={{ color: 'gray' }} />,
  skiing: <SvgIcon component={WavesIcon} style={{ color: 'gray' }} />,
  beachfront: <SvgIcon component={BeachAccessIcon} style={{ color: 'gray' }} />,
  iconiccities: <SvgIcon component={LocationCityIcon} style={{ color: 'gray' }} />,
  riads: <SvgIcon component={HomeIcon} style={{ color: 'gray' }} />,
  nationalparks: <SvgIcon component={NaturePeopleIcon} style={{ color: 'gray' }} />,
  earthhomes: <SvgIcon component={CabinIcon} style={{ color: 'gray' }} />,
  desert: <SvgIcon component={WavesIcon} style={{ color: 'gray' }} />,
  farms: <SvgIcon component={EmojiNatureIcon} style={{ color: 'gray' }} />,
  lake: <SvgIcon component={LandscapeIcon} style={{ color: 'gray' }} />,
  cabins: <SvgIcon component={ExploreIcon} style={{ color: 'gray' }} />,
  arctic: <SvgIcon component={CabinIcon} style={{ color: 'gray' }} />,
  jungle: <SvgIcon component={DriveEtaIcon} style={{ color: 'gray' }} />,
  underwater: <SvgIcon component={SportsSoccerIcon} style={{ color: 'gray' }} />,
  mountains: <SvgIcon component={EmojiFoodBeverageIcon} style={{ color: 'gray' }} />,
  safari: <SvgIcon component={WeekendIcon} style={{ color: 'gray' }} />,
  islands: <SvgIcon component={SportsEsportsIcon} style={{ color: 'gray' }} />,
  haunted: <SvgIcon component={FlightIcon} style={{ color: 'gray' }} />,
};

const FilterOptions = ({ types, onSelect }) => {
    const scrollContainerRef = useRef(null);
  
    const handleScrollLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft -= 100;
      }
    };
  
    const handleScrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 100;
      }
    };
  
    return (
      <div className="filter-options-container">
        <button className="scroll-button scroll-button-left" onClick={handleScrollLeft}>&lt;</button>
        <div className="filter-options" ref={scrollContainerRef}>
          {types.map((type, index) => (
            <div key={index} onClick={() => onSelect(type)} className="filter-option">
              {TypeIconMap[type]}
              <div className="type-text"><p>{type}</p></div>
            </div>
          ))}
        </div>
        <button className="scroll-button scroll-button-right" onClick={handleScrollRight}>&gt;</button>
      </div>
    );
  };
  
  export default FilterOptions;