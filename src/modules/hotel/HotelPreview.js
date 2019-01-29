import React from 'react';
import api from 'utils/api';
import { Icon, Rate } from 'antd';
import Preview from './Preview/Preview';
import About from './Preview/AboutHotel';
import Table from './Preview/DetailTable';
import Rating from './Preview/UserRating';
import Policy from './Preview/HotelPolicy';
import Similar from './Preview/SimilarHotel';
import Services from './Preview/HotelServices';
import Amenities from './Preview/HotelAmenities';
import { withRouter } from 'react-router-dom';

export default withRouter(class HotelPreview extends React.Component {
  state = { hotel: {} };

  fetch = () => {
    api.getHotelDetail(this.props.match.params.id)
      .then((hotel) => {
        this.setState({ hotel });
      })
      .catch()
  }

  componentDidMount() {
    if (!!this.props.match.params.id) {
      this.fetch();
    }
  }
  render() {
    const { hotel } = this.state;
    return (<div className="hpreview">
      <div className="row hotel__box">
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
})