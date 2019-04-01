import React from 'react';
import { Icon, Tooltip } from 'antd';
import { FormattedMessage } from 'react-intl';

const HotelAmenities = () => (
  <div className="hotel-amenities">
    <span className="btn btn--circle">
      <Tooltip title={<FormattedMessage id="UPDATE_INFO" />}>
        <Icon type="form" />
      </Tooltip>
    </span>
    <FormattedMessage id="TOP_AMENITIES" />
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

export default HotelAmenities;