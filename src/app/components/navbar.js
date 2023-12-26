// FilterOptions.js
import React from 'react';
import { SvgIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './navbar.css';


const TypeIconMap = {
  castle: <SvgIcon component={SearchIcon} style={{ color: 'white' }} />,
  web: <SvgIcon component={LanguageIcon} style={{ color: 'gray' }} />,
  profile: <SvgIcon component={AccountCircleIcon} style={{ color: 'gray' , fontSize: 40 }} />,
  
};

export default function Navbar() {
  return (
    <div className="navbarouter">
      <div className="navimage">
      <img src='https://imgs.search.brave.com/WJiIdIr2GDVaZub5tfHUg-_MGyD1qrahiPYz2wc5XyU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hbmlt/YXRpb252aXNhcnRz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wMS9BaXJi/bmItUHJlc2VudC1M/b2dvLVNpbmNlLTIw/MTQuanBn' width={100} alt="Airbnb Logo" />
      </div>

      <div className="navcenter">
        <p>Anywhere</p>
        <p>Any Week</p>
        <p>Add Guest</p>
        <div className='search'> {TypeIconMap['castle']}</div>
      </div>

      <div className="navright">
        <p>Airbnb your home</p>
        <div className='web'> {TypeIconMap['web']}</div>
        <div className='profile'> {TypeIconMap['profile']}</div>
      </div>
    </div>
  );
}
