import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Tooltip, Icon, Select, Rate } from 'antd';

const HotelBasic = ({ hotel }) => (
  <React.Fragment>
    <div className="toolbar">
      <Link to={`/hotel/${hotel.id}`} className="btn btn--circle">
        <Tooltip title={<FormattedMessage id="UPDATE_INFO" />}>
          <Icon type="form" />
        </Tooltip>
      </Link>
      <span className="toolbar__head">
        Chỉnh sửa thông tin cơ bản
    </span>
    </div>
    <div className="preview__header title">
      <div className="title__name">{hotel.name}
        <Rate value={5} disabled />
      </div>
      <div className="title__address"><Icon type="environment" style={{ marginRight: 6 }} />{hotel.address}</div>
    </div>
    <div className="preview__action">
      <FormattedMessage id="SELECT_HOTEL_STAR" />
      <Select defaultValue="0" size="small">
        <Select.Option value="0"><Rate value={0} disabled /></Select.Option>
        <Select.Option value="1"><Rate value={1} disabled /></Select.Option>
        <Select.Option value="2"><Rate value={2} disabled /></Select.Option>
        <Select.Option value="3"><Rate value={3} disabled /></Select.Option>
        <Select.Option value="4"><Rate value={4} disabled /></Select.Option>
        <Select.Option value="5"><Rate value={5} disabled /></Select.Option>
      </Select>
    </div>
  </React.Fragment>
)

export default HotelBasic;