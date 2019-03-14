import React from 'react';
import { Modal, Select, Slider, Checkbox } from 'antd';
import injectIntl from 'intl';

class Policy extends React.Component {
  render() {
    return (<Modal>
      <div className="upload-media">
        <p>
          Chính sách!<br />
          Hãy liệt kê các chính sách cơ bản như giờ nhận trả phòng, hủy hòng, trẻ em, vật nuôi
        </p>
        <div className="upload-media__box">
          <div>Hủy đặt phòng</div>
          <span>
            <span>Miễn phí hủy phòng trước</span>
            <Select>
              <Select.Option value="1">1 ngày</Select.Option>
              <Select.Option value="2">3 ngày</Select.Option>
              <Select.Option value="3">5 ngày</Select.Option>
              <Select.Option value="4">7 ngày</Select.Option>
              <Select.Option value="5">14 ngày</Select.Option>
              <Select.Option value="6">30 ngày</Select.Option>
            </Select>
          </span>
          <span>
            <span>Tính phí 50% trước</span>
            <Select>
              <Select.Option value="1">1 ngày</Select.Option>
              <Select.Option value="2">3 ngày</Select.Option>
              <Select.Option value="3">5 ngày</Select.Option>
              <Select.Option value="4">7 ngày</Select.Option>
              <Select.Option value="5">14 ngày</Select.Option>
              <Select.Option value="6">30 ngày</Select.Option>
            </Select>
          </span>
        </div>
        <div className="upload-media__box">
          <div>Giờ nhận - trả phòng</div>
          <div>
            <span>Giờ nhận phòng</span>
            <span>
              <span>
                <span>Từ</span>
                <Select>
                  <Select.Option value="1">12 giờ</Select.Option>
                  <Select.Option value="2">14 giờ</Select.Option>
                </Select>
              </span>
              <span>
                <span>Đến</span>
                <Select>
                  <Select.Option value="1">20 giờ</Select.Option>
                  <Select.Option value="2">24 giờ</Select.Option>
                </Select>
              </span>
              <span>
                <Slider />
              </span>
            </span>
          </div>
          <div>
            <span>Giờ trả phòng</span>
            <span>
              <span>
                <span>Từ</span>
                <Select>
                  <Select.Option value="1">12 giờ</Select.Option>
                  <Select.Option value="2">14 giờ</Select.Option>
                </Select>
              </span>
              <span>
                <span>Đến</span>
                <Select>
                  <Select.Option value="1">20 giờ</Select.Option>
                  <Select.Option value="2">24 giờ</Select.Option>
                </Select>
              </span>
              <span>
                <Slider />
              </span>
            </span>
          </div>
          <div>
            <p>Bạn có chấp nhận khách nhận phòng sớm?</p>
            <Checkbox>Không</Checkbox>
            <Checkbox>Đồng ý, có thể phải trả phí.</Checkbox>
          </div>
          <div>
            <p>Đối với khách trả phòng muộn?</p>
            <Checkbox>Không</Checkbox>
            <Checkbox>Đồng ý, có thể phải trả phí.</Checkbox>
          </div>
        </div>
        <div className="upload-media__box">
          <div>Trẻ em và giường phụ</div>

        </div>
      </div>
    </Modal>)
  }
}

export default injectIntl(Policy);