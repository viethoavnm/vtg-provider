import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Icon, Tooltip, Empty, Modal, Spin } from 'antd';

export default class DetailTable extends React.PureComponent {
  onUpdateRoom = () => {
    Modal.info({
      title: 'API đang được cập nhật.',
      content: <Spin tip="Cập nhật..." />
    })
  }

  render() {
    return (
      <div className="table-wrapper">
        <div className="toolbar">
          <span className="btn btn--circle" onClick={this.onUpdateRoom}>
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