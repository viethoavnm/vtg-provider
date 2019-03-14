import React from 'react';
import { Modal, Select, Checkbox } from 'antd';
import injectIntl from 'intl';

class Convenient extends React.Component {
  onChangeConvenient = () => {

  }

  onChangeService = () => {

  }

  render() {
    const convenients = [], services = [];
    return (<Modal>
      <div className="upload-media">
        <p>
          Tiện nghi và dịch vụ!<br />
          Giờ bạn hãy cho chúng tôi biết một số thông tin về "khách sạn" như tiện nghi, ngôn ngữ sử dụng, bãi đỗ xe,...
        </p>
        <div className="upload-media__box">
          <div>Ngôn ngữ</div>
          <span>
            <span>Ngôn ngữ chính</span>
            <Select>
              <Select.Option value="vi">Tiếng Việt</Select.Option>
              <Select.Option value="en">Tiếng Anh</Select.Option>
            </Select>
          </span>
          <span>
            <span>Ngôn ngữ khác</span>
            <span>+ Thêm ngôn ngữ</span>
          </span>
        </div>
        <div className="upload-media__box">
          <div>Tiện nghi</div>
          {convenients.map((conv) => (<span onClick={this.onChangeConvenient}>
            <Checkbox checked>
              <span>{conv.name}</span>
              {conv.icon && <span>
                <img src={conv.icon} />
              </span>}
            </Checkbox>
          </span>))}
        </div>
        <div className="upload-media__box">
          <div>Dịch vụ</div>
          {services.map((ser) => (<span onClick={this.onChangeService}>
            <Checkbox checked>
              <span>{ser.name}</span>
            </Checkbox>
          </span>))}
        </div>
      </div>
    </Modal>)
  }
}

export default injectIntl(Convenient);