
import React from 'react';
import { useParams } from 'react-router-dom';
import './hoteldetails.css'
import { SvgIcon } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import CottageIcon from '@mui/icons-material/Cottage';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';
import PoolIcon from '@mui/icons-material/Pool';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import WindPowerIcon from '@mui/icons-material/WindPower';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import NordicWalkingIcon from '@mui/icons-material/NordicWalking';
import  Map  from "./map";

import DummyData from './data';



const TypeIconMap = {
  wifi: <SvgIcon component={WifiIcon} style={{ color: 'gray' }} />,
  drier: <SvgIcon component={WindPowerIcon} style={{ color: 'gray' }} />,
  ac: <SvgIcon component={AcUnitIcon} style={{ color: 'gray' }} />,
  tv: <SvgIcon component={TvIcon} style={{ color: 'gray' }} />,
  pool: <SvgIcon component={PoolIcon} style={{ color: 'gray' }} />,
  smoke: <SvgIcon component={SmokingRoomsIcon} style={{ color: 'gray' }} />,
  cot: <SvgIcon component={CottageIcon} style={{ color: 'gray' }} />,
  fire: <SvgIcon component={FireplaceIcon} style={{ color: 'gray' }} />,
  star: <SvgIcon component={StarBorderIcon} style={{ color: 'gray' }} />,
  check: <SvgIcon component={NordicWalkingIcon} style={{ color: 'gray' }} />,
  fire: <SvgIcon component={FireplaceIcon} style={{ color: 'gray' }} />,


}

export default function HotelDetails() {
    const { hotelId } = useParams();
    const hotelDetails = DummyData.find((hotel) => hotel.id === hotelId);

  return (
    <div className="hotel-details">
      <br/>
     
      <div className='h2heading'>
        <h2>{hotelDetails.name}</h2>
      </div>
      <br/>
      
      <div className='fullimages'>
        <div className='firstimage'><img src={hotelDetails.imageUrl}></img></div>
        <div className='middleimages'>
          <div><img src={hotelDetails.imageUrl1}></img></div>
          <div><img src={hotelDetails.imageUrl2}></img></div>
        </div>
        <div className='lastimages'>
          <div><img src={hotelDetails.imageUrl3}></img></div>
          <div><img src={hotelDetails.imageUrl4}></img></div>
        </div>
      </div>
      <br/>

      <div className='h2heading'>
        <h3>{hotelDetails.location}</h3>
        <p>16+ guests • 18 bedrooms • 20 beds • 18 bathrooms</p>
        <p>No reviews yet</p>
        <br/>
        <div className='topbox'>
          <div className='innerbox'>
            <div className='leftinnerimage'><img src='https://a0.muscache.com/im/pictures/user/08925cce-c820-4624-b838-15c6a3c54ab5.jpg?im_w=240' width={30}></img></div>
            <div className='rightinnerbox'>
              <p><b>Hosted by Abdellatif</b></p>
              <p>10 years hosting</p>
            </div>
          </div>
        </div>
        <div className='bottombox'>
          <div className='innerbox'>
                <div className='leftinnerimage'>{TypeIconMap['check']}</div>
                <div className='rightinnerbox'>
                  <p><b>Self check-in</b></p>
                  <p>You can check in with the building staff.</p>
                </div>
              </div>
              <div className='innerbox'>
                <div className='leftinnerimage'>{TypeIconMap['ac']}</div>
                <div className='rightinnerbox'>
                  <p><b>Dive right in</b></p>
                  <p>This is one of the few places in the area with a pool.</p>
                </div>
              </div>
              <div className='innerbox'>
                <div className='leftinnerimage'>{TypeIconMap['star']}</div>
                <div className='rightinnerbox'>
                  <p><b>Experienced host</b></p>
                  <p>Abdellatif has 494 reviews for other places.</p>
                </div>
          </div>
        </div>
        <div className='offer'>
          <h3>What this place Offers</h3>
          <div className='offers'>
          <div className='imageandtext'>
            <div><h3>{TypeIconMap['wifi']}</h3><p>WiFi</p></div>
            <div><h3>{TypeIconMap['pool']}</h3><p>Pool</p></div>
            <div><h3>{TypeIconMap['tv']}</h3><p>TV</p></div>
            <div><h3>{TypeIconMap['ac']}</h3><p>Air Conditioning</p></div>
          </div>
          <div className='imageandtext'>
          <div><h3>{TypeIconMap['fire']}</h3><p>Indoor Fireplace</p></div>
          <div><h3>{TypeIconMap['cot']}</h3><p>Cot</p></div>
          <div><h3>{TypeIconMap['drier']}</h3><p>Hair Drier</p></div>
          <div><h3>{TypeIconMap['smoke']}</h3><p>Smoking allowed</p></div>
          </div>
          </div>
        </div>

        <div className='offer2'>
          <h3>Where you’ll be</h3>
          <br/>
          <p>Riad Morocco</p>
          {/* <div className='mapdiv'></div> */}
        </div>
        <Map/>



      </div>


      

    </div>
  );
};


