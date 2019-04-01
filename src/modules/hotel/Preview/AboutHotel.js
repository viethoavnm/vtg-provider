import React from 'react';
import { Tooltip, Icon, Input } from 'antd';
import { FormattedMessage } from 'react-intl';

const AboutHotel = () => (
  <React.Fragment>
    <div className="toolbar">
      <span className="btn btn--circle">
        <Tooltip title={<FormattedMessage id="UPDATE_INFO" />}>
          <Icon type="form" />
        </Tooltip>
      </span>
      <span className="toolbar__head">
        Giới thiệu "khách sạn"
      </span>
    </div>
    <Input.TextArea readOnly value="Chưa có thông tin" rows={3} />
  </React.Fragment>
)

export default AboutHotel;