import React from 'react';
import * as api from 'utils/api';
import About from './Preview/AboutHotel';
import Table from './Preview/DetailTable';
import Rating from './Preview/UserRating';
import Policy from './Preview/HotelPolicy';
import Similar from './Preview/SimilarHotel';
import Preview from './Preview/ImagePreview';
import Services from './Preview/HotelServices';
import Amenities from './Preview/HotelAmenities';
import { Icon, Rate, Button, Select } from 'antd';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'intl';

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
    return (
      <React.Fragment>
        <div className="wrapper__title title">
          <div className="title__left">
            <h3 className="title__main"><FormattedMessage id="UPDATE_HOTEL_INFO" /></h3>
            <p className="title__small"><FormattedMessage id="UPDATE_HOTEL_DES" /></p>
          </div>
          <div className="title__right">
            <Button type="danger">
              <FormattedMessage id="DELETE_HOTEL" />
            </Button>
          </div>
        </div>
        <div className="preview box">
          <div className="preview__header title">
            <div className="title__name">{hotel.name}<Rate value={5} disabled /></div>
            <div className="title__address"><Icon type="environment" style={{ marginRight: 6 }} />{hotel.address}</div>
          </div>
          <div className="preview__action">
            <Button>
              <FormattedMessage id="UPDATE_INFO" />
            </Button>
            <span>
              <FormattedMessage id="SELECT_HOTEL_STAR" />
              <Select className="selection">

              </Select>
            </span>
          </div>
          <Preview thumbs={[]} />
          <Amenities />
          <Table data={[]} />
          <Services />
          <About />
          <Policy />
          <Rating />
          <Similar />
        </div>
      </React.Fragment>)
  }
})