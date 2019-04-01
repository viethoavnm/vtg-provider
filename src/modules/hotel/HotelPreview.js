import React from 'react';
import * as api from 'utils/api';
import About from './Preview/AboutHotel';
import Policy from './Preview/HotelPolicy';
import Preview from './Preview/ImagePreview';
import Services from './Preview/HotelServices';
import Amenities from './Preview/HotelAmenities';
import { Icon, Rate, Button, Select, Tooltip, Divider } from 'antd';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'intl';
import { Link } from 'react-router-dom';

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
        <div className="box">
          <Link to={`/hotel/${this.props.match.params.id}`} className="btn btn--circle btn--float">
            <Tooltip title={<FormattedMessage id="UPDATE_INFO" />}>
              <Icon type="form" />
            </Tooltip>
          </Link>
          <div className="preview__header title">
            <div className="title__name">{hotel.name}
              <Rate value={5} disabled />
            </div>
            <div className="title__address"><Icon type="environment" style={{ marginRight: 6 }} />{hotel.address}</div>
          </div>
          <div className="preview__action">
            <FormattedMessage id="SELECT_HOTEL_STAR" />
            <Select defaultValue="0">
              <Select.Option value="0"><Rate value={0} disabled /></Select.Option>
              <Select.Option value="1"><Rate value={1} disabled /></Select.Option>
              <Select.Option value="2"><Rate value={2} disabled /></Select.Option>
              <Select.Option value="3"><Rate value={3} disabled /></Select.Option>
              <Select.Option value="4"><Rate value={4} disabled /></Select.Option>
              <Select.Option value="5"><Rate value={5} disabled /></Select.Option>
            </Select>
          </div>
        </div>
        <div className="preview">

          <Divider />
          <Preview thumbs={[null, null, null, null]} />
          <Divider />
          <Amenities />
          <Divider />
          <Services />
          <Divider />
          <About />
          <Divider />
          <Policy />
        </div>
      </React.Fragment>)
  }
})