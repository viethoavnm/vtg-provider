import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Icon, Tooltip, Modal, Spin } from 'antd';

class HotelServices extends React.Component {

  onUpdateServices = () => {
    Modal.info({
      title: 'API đang được cập nhật.',
      content: <Spin tip="Cập nhật..." />
    })
  }

  render = () => {
    const services = [null, null, null, null, null, null, null, null];
    return (
      <div className="hotel-amenities">
        <div className="toolbar">
          <span className="btn btn--circle" onClick={this.onUpdateServices}>
            <Tooltip title={<FormattedMessage id="UPDATE_INFO" />}>
              <Icon type="form" />
            </Tooltip>
          </span>
          <span className="toolbar__head">
            <FormattedMessage id="HOTEL_AMENITIES" />
          </span>
        </div>
        <div className="row no-gutters">
          <div className="amenity-list col-12">
            {services.map((item, index) => {
              if (item) {
                return (<div className="amenity-item">
                  <span className="u-icon"><Icon type="wifi" /></span>
                  <span className="u-title">Tiện ích</span>
                </div>)
              }
              return (<div className="amenity-item" key={index}>
                <span className="u-icon"><Icon type="close-square" /></span>
                <span className="u-title">Chưa cài đặt</span>
              </div>)
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default HotelServices;