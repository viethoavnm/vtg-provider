import React from 'react';
import { Tooltip, Icon, Input, Modal } from 'antd';
import { FormattedMessage } from 'react-intl';

class AboutHotel extends React.Component {
  state = { modal: false, loading: false, value: '' }

  onToggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render = () => {
    const { modal, loading, value } = this.state;
    return (
      <React.Fragment>
        <div className="toolbar">
          <span className="btn btn--circle" onClick={this.onToggle}>
            <Tooltip title={<FormattedMessage id="UPDATE_INFO" />}>
              <Icon type="form" />
            </Tooltip>
          </span>
          <span className="toolbar__head">
            Giới thiệu "khách sạn"
        </span>
        </div>
        <Input.TextArea readOnly value="Hãy mô tả ngắn gọn chỗ nghỉ của bạn" rows={3} />
        <Modal
          visible={modal}
          loading={loading}
          onCancel={this.onToggle}
          title="Giới thiệu về khách sạn của bạn">
          <Input.TextArea
            rows={5}
            value={value}
            onChange={this.onChange}
            placeholder="Hãy mô tả ngắn gọn chỗ nghỉ của bạn" />
        </Modal>
      </React.Fragment>
    )
  }
}

export default AboutHotel;