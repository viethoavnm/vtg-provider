import React from 'react';
import Slider from 'react-slick';
import { FormattedMessage } from 'intl';
import { RESOURCES_PATH } from 'consts';
import UploadMedia from '../UploadMedia/UploadMedia'
import { Tooltip, Icon, Empty, Button, Modal } from 'antd';

class Preview extends React.PureComponent {
  state = {
    sliderA: null,
    sliderB: null,
    modal: false
  }

  onToggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  componentDidMount() {
    this.setState({
      sliderA: this.sliderA,
      sliderB: this.sliderB
    });
  }

  render() {
    const { sliderA, sliderB, modal } = this.state;
    const thumbs = this.props.hotel.contentNames ? this.props.hotel.contentNames.filter((item) => (item)) : [];
    const isEmty = !thumbs.length;
    return (
      <div className="slick-wrapper">
        <div className="toolbar">
          <span className="btn btn--circle" onClick={this.onToggle}>
            <Tooltip title={<FormattedMessage id="UPDATE_INFO" />}>
              <Icon type="form" />
            </Tooltip>
          </span>
          <span className="toolbar__head">
            Chỉnh sửa thư viện ảnh
          </span>
        </div>
        {isEmty ?
          <React.Fragment>
            <Empty
              image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
              imageStyle={{
                height: 200,
              }}
              description={
                <span>
                  Chưa có ảnh được tải lên
                </span>
              }
            >
              <Button type="primary" onClick={this.onToggle}>Tải lên ngay</Button>
            </Empty>,
          </React.Fragment>
          :
          <React.Fragment>
            <Slider
              {...settingsA}
              asNavFor={sliderB}
              ref={e => (this.sliderA = e)}>
              {thumbs.map((item, index) =>
                (item ? <img src={RESOURCES_PATH + item} key={index.toString()} alt="img" /> : <span key={index.toString()} className="img-no-src">1920x1080</span>))}
            </Slider>
            <Slider
              {...settingsB}
              asNavFor={sliderA}
              ref={e => (this.sliderB = e)}>
              {thumbs.map((item, index) =>
                (item ? <img src={RESOURCES_PATH + item} key={index.toString()} alt="img" /> : <span key={index.toString()} className="img-no-src">1920x1080</span>))}
            </Slider>
          </React.Fragment>
        }
        <Modal
          width={800}
          visible={modal}
          title="Chỉnh sửa thư viện ảnh"
          onCancel={this.onToggle}>
          <UploadMedia />
        </Modal>
      </div>
    );
  }
}

Preview.defaultProps = {
  hotel: {}
}

export default Preview;

const settingsA = {
  dots: false,
  arrows: false,
  speed: 1000,
  lazyLoad: 'ondemand',
  fade: true
};

const settingsB = {
  dots: false,
  lazyLoad: 'ondemand',
  infinite: true,
  speed: 1000,
  autoplay: true,
  focusOnSelect: true,
  autoplaySpeed: 7500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        centerMode: true,
      }
    }
  ]
};