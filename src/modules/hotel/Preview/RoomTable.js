import React from 'react';
import { Icon, Tooltip, Empty } from 'antd';
import { FormattedMessage } from 'react-intl';

export default class DetailTable extends React.PureComponent {
  onBooking = () => {
    window.location = "#/payment"
  }
  render() {
    return (
      <div className="table-wrapper">
        <div className="toolbar">
          <span className="btn btn--circle">
            <Tooltip title={<FormattedMessage id="UPDATE_INFO" />}>
              <Icon type="form" />
            </Tooltip>
          </span>
          <span className="toolbar__head">
            Phòng "khách sạn"
          </span>
        </div>
        <div>
          <Empty />
        </div>
      </div>
    )
  }
}