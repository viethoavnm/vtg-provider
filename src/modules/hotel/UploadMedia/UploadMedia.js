import React from 'react';
import { Icon } from 'antd';
import injectIntl from 'intl';
import Upload from 'components/Upload';

class UploadMedia extends React.Component {
  render() {
    return (<div className="upload-media">
      <div className="upload-media__box">
        <div className="title">Hình ảnh và video</div>
        <p>
          Những bức ảnh đẹp là lời mời gọi hấp dẫn về một trải nghiệm trọn vẹn tại "Khách sạn" của bạn!
          Hãy đăng tải những bức ảnh có độ phân giải cao và thể hiện chính xác những gì "khách sạn" của bạn có.
          Chúng tôi sẽ hiển thị những bức ảnh này trong trang "khách sạn" của bạn trên trang www.spetrip.com.
       </p>
      </div>
      <div className="upload-media__box">
        <div className="title">Thư viện ảnh</div>
        <Upload
          listType="picture-card"
          fileList={[]}>
          <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
          </div>
        </Upload>
      </div>
      <div className="upload-media__box">
        <div className="title">Video</div>
        <Upload
          listType="picture-card"
          fileList={[]}>
          <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
          </div>
        </Upload>
      </div>
      <div className="upload-media__box">
        <div className="title">Chú ý</div>
        <div>
          <span></span>
          <ul>
            <li>Bạn hoàn toàn chịu trách nhiệm về bản quyền cũng như quyền riêng tư những hình ảnh, video mà mình đăng tải</li>
            <li>Bạn không nên sử dụng hình ảnh, video nếu không biết ai là chủ sở hữu</li>
            <li>Bạn chỉ nên sử dụng hình ảnh, video mình có bản quyền hoặc của một người khác nhưng đã có sự chấp thuận để sử dụng</li>
            <li>Mọi hình ảnh, video vi phạm bản quyền, quyền riêng tư chúng tôi có quyền xóa mà không cần báo trước.</li>
          </ul>
        </div>
      </div>
      <div className="upload-media__box">
        <div className="title">Bạn chưa có nhưng hình ảnh, video chuyên nghiệp? Không sao!</div>
        <ul>
          <li>Hãy sử dụng điện thoại thông minh hay máy ảnh kỹ thuật số</li>
          <li>Tham khảo những mẹo hay mà chúng tôi gợi ý bạn <a href="#">tại đây</a></li>
          <li>Sử dụng các công cụ hỗ trợ chỉnh sửa như photoshop,...</li>
        </ul>
        <div className="title">Bạn vẫn chưa hài lòng với những hình ảnh, video của mình?</div>
        <ul>
          <li>Hãy <a href="#">liên hệ</a> với chúng tôi để được tư vấn và hỗ trợ!</li>
        </ul>
      </div>
    </div>)
  }
}

export default injectIntl(UploadMedia);