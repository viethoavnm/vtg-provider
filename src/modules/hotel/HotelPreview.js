import React from 'react';
import { Icon, Rate } from 'antd';
import Preview from './Preview/Preview';
import About from './Preview/AboutHotel';
import Table from './Preview/DetailTable';
import Rating from './Preview/UserRating';
import Policy from './Preview/HotelPolicy';
import Similar from './Preview/SimilarHotel';
import Services from './Preview/HotelServices';
import Amenities from './Preview/HotelAmenities';

export default class HotelPreview extends React.Component {
  render() {
    const hotel = {};
    return (<div className="detail container">
      <div className="row box">
        <div className="col-12">
          <span className="title">
            {hotel.name}
            <Rate value={5} disabled />
          </span>
          <p className="address"><Icon type="environment" /> {hotel.address}</p>
        </div>
      </div>
      <Preview thumbs={[]} />
      <Amenities />
      <Table data={[]} />
      <Services />
      <About />
      <Policy />
      <Rating />
      <Similar />
    </div>)
  }
}