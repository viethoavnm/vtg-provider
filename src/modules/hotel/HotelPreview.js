import React from 'react';
import * as api from 'utils/api';
import Basic from './Preview/HotelBasic';
import About from './Preview/AboutHotel';
import Policy from './Preview/HotelPolicy';
import RoomTable from './Preview/RoomTable';
import Preview from './Preview/ImagePreview';
import Services from './Preview/HotelServices';
import Amenities from './Preview/HotelAmenities';
import { Button, Divider } from 'antd';
import { FormattedMessage } from 'intl';
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
        <div className="preview">
          <div className="box">
            <Basic hotel={hotel} />
          </div>
          <div className="box">
            <Preview thumbs={[null, null, null, null]} />
          </div>
          <div className="box">
            <Amenities />
          </div>
          <div className="box">
            <RoomTable />
          </div>
          <div className="box">
            <Services />
          </div>
          <div className="box">
            <About />
          </div>
          <div className="box">
            <Policy />
          </div>
          <Divider />
        </div>
      </React.Fragment>)
  }
})