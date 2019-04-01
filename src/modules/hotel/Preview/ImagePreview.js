import React from 'react';
import Slider from 'react-slick';
import { Tooltip, Icon } from 'antd';
import { FormattedMessage } from 'intl';
import { RESOURCES_PATH } from 'consts';

class Preview extends React.PureComponent {
  state = {
    sliderA: null,
    sliderB: null
  }

  componentDidMount() {
    /*eslint-disable-next-line */
    this.setState({
      sliderA: this.sliderA,
      sliderB: this.sliderB
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.thumbs.length > 0 && this.props.thumbs.length === 0) {
      this.sliderA.slickNext();
    }
  }

  render() {
    const { sliderA, sliderB } = this.state;
    return (
      <div className="slick-wrapper">
        <div>
          <span className="btn btn--circle">
            <Tooltip title={<FormattedMessage id="UPDATE_INFO" />}>
              <Icon type="form" />
            </Tooltip>
          </span>
        </div>
        <Slider
          {...settingsA}
          asNavFor={sliderB}
          ref={e => (this.sliderA = e)}>
          {this.props.thumbs.map((item, index) =>
            (item ? <img src={RESOURCES_PATH + item} key={index.toString()} alt="img" /> : <span key={index.toString()} className="img-no-src">1920x1080</span>))}
        </Slider>
        <Slider
          {...settingsB}
          asNavFor={sliderA}
          ref={e => (this.sliderB = e)}>
          {this.props.thumbs.map((item, index) =>
            (item ? <img src={RESOURCES_PATH + item} key={index.toString()} alt="img" /> : <span key={index.toString()} className="img-no-src">1920x1080</span>))}
        </Slider>
      </div>
    );
  }
}

Preview.defaultProps = {
  thumbs: [null, null, null, null]
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