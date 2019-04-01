import React from 'react';
import { Icon, Tooltip } from 'antd';
import { FormattedMessage } from 'react-intl';

const HotelServices = () => (
  <div className="hotel-amenities">
    <div className="toolbar">
      <span className="btn btn--circle">
        <Tooltip title={<FormattedMessage id="UPDATE_INFO" />}>
          <Icon type="form" />
        </Tooltip>
      </span>
      <span className="toolbar__head">
        <FormattedMessage id="HOTEL_AMENITIES" />
      </span>
    </div>
    <div className="row no-gutters">
      <div className="col-6 amenity-list">
        <div className="amenity-item">
          <span className="u-icon"><Icon type="wifi" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
        <div className="amenity-item">
          <span className="u-icon"><Icon type="coffee" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
        <div className="amenity-item">
          <span className="u-icon"><Icon type="shop" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
        <div className="amenity-item">
          <span className="u-icon"><Icon type="gift" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
      </div>
      <div className="col-6 amenity-list">
        <div className="amenity-item">
          <span className="u-icon"><Icon type="wifi" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
        <div className="amenity-item">
          <span className="u-icon"><Icon type="coffee" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
        <div className="amenity-item">
          <span className="u-icon"><Icon type="shop" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
        <div className="amenity-item">
          <span className="u-icon"><Icon type="gift" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
      </div>
    </div>
    <div className="row no-gutters">
      <div className="col-6 amenity-list">
        <div className="amenity-item">
          <span className="u-icon"><Icon type="wifi" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
        <div className="amenity-item">
          <span className="u-icon"><Icon type="coffee" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
        <div className="amenity-item">
          <span className="u-icon"><Icon type="shop" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
        <div className="amenity-item">
          <span className="u-icon"><Icon type="gift" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
      </div>
      <div className="col-6 amenity-list">
        <div className="amenity-item">
          <span className="u-icon"><Icon type="wifi" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
        <div className="amenity-item">
          <span className="u-icon"><Icon type="coffee" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
        <div className="amenity-item">
          <span className="u-icon"><Icon type="shop" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
        <div className="amenity-item">
          <span className="u-icon"><Icon type="gift" /></span>
          <span className="u-title">Tiện ích</span>
        </div>
      </div>
    </div>
  </div>
)

export default HotelServices;