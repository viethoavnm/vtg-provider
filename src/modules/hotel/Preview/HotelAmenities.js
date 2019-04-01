import React from 'react';
import { Icon, Tooltip, Modal } from 'antd';
import { FormattedMessage } from 'react-intl';
class HotelAmenities extends React.Component {

  onUpdateAmenities = () => {
    Modal.warning({
      title: 'Chú ý',
      content: 'Danh sách tiện nghi khách sạn đang trống! Hãy liên hệ QTV để được hỗ trợ.'
    })
  }

  render = () => {
    const amenities = [null, null, null, null, null, null, null, null];
    return (
      <div className="hotel-amenities">
        <div className="toolbar">
          <span className="btn btn--circle" onClick={this.onUpdateAmenities}>
            <Tooltip title={<FormattedMessage id="UPDATE_INFO" />}>
              <Icon type="form" />
            </Tooltip>
          </span>
          <span className="toolbar__head">
            <FormattedMessage id="TOP_AMENITIES" />
          </span>
        </div>
        <div className="row no-gutters">
          <div className="amenity-list col-12">
            {amenities.map((item, index) => {
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

export default HotelAmenities;