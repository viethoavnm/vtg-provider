import React from 'react';
import * as api from 'utils/api';
import Map from 'components/Location';
import { withRouter } from 'react-router-dom';
import injectIntl, { FormattedMessage } from 'intl';
import { Form, Input, Select, Button, message } from 'antd';

const FormItem = Form.Item;

class HotelDetail extends React.Component {
  state = { countries: [], cities: [] }

  fetch = () => {
    api.getHotelDetail(this.props.match.params.id)
      .then((data) => {
        this.data = data;
        this.props.form.setFieldsValue({
          name: data.name,
          nameEnglish: data.nameEnglish,
          provinceId: data.provinceId,
          address: data.address,
          hotelType: data.hotelType,
          street: data.street
        });
      })
      .catch()
  }

  onSave = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (!this.props.match.params.id) {
          api.createHotel(values)
            .then(({ id }) => {
              message.success(this.props.t("CREATE_SUCCESS"));
              this.props.history.push(`/preview/${id}`);
            })
        } else {
          api.updateHotel({ id: this.data.id, ...values })
            .then(({ id }) => {
              message.success(this.props.t("UPDATE_SUCCESS"));
              this.props.history.push(`/preview/${id}`);
            })
        }
      }
    });
  }

  componentDidMount() {
    api.getCountries()
      .then(({ content }) => {
        this.setState({ countries: content })
      });
    api.getProvincesBrief()
      .then((data) => {
        this.setState({ cities: data })
      })
    if (!!this.props.match.params.id) {
      this.fetch();
    }
  }

  render() {
    const { countries, cities } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
        <div className="wrapper__title title">
          <div className="title__left">
            <h3 className="title__main"><FormattedMessage id="HELLO_NAME" values={{ name: 'Trần Việt Hòa' }} /></h3>
            <p className="title__small"><FormattedMessage id="INPUT_HOTEL_TEXT_DES" /></p>
          </div>
          <div className="title__right">
          </div>
        </div>
        <Form layout="horizontal">
          <div className="row detail">
            <div className="col-6">
              <div className="box">
                <h3 className="detail__title">
                  <FormattedMessage id="INPUT_HOTEL_INFO" />
                </h3>
                <div className="detail__hint"><FormattedMessage id="INPUT_HOTEL_NAME" /></div>
                <FormItem label={<FormattedMessage id="INPUT_VIETNAMESE" />}>
                  {getFieldDecorator('name')(<Input />)}
                </FormItem>
                <FormItem
                  label={<FormattedMessage id="INPUT_ENGLISH" />}
                  help={<small className="detail__hint"><FormattedMessage id="INPUT_ENGLISH_GUILD" /></small>}>
                  {getFieldDecorator('nameEnglish')(<Input />)}
                </FormItem>
                <FormItem label={<FormattedMessage id="INPUT_HOTEL_TYPE" />}>
                  {getFieldDecorator('hotelType')(
                    <Select>
                      <Select.Option key="HOTEL"><FormattedMessage id="HOTEL" /></Select.Option>
                      <Select.Option key="HOMESTAY"><FormattedMessage id="HOMESTAY" /></Select.Option>
                      <Select.Option key="MOTEL"><FormattedMessage id="MOTEL" /></Select.Option>
                      <Select.Option key="RESORT"><FormattedMessage id="RESORT" /></Select.Option>
                      <Select.Option key="APARTMENT"><FormattedMessage id="APARTMENT" /></Select.Option>
                      <Select.Option key="YACHT"><FormattedMessage id="YACHT" /></Select.Option>
                      <Select.Option key="VILLA"><FormattedMessage id="VILLA" /></Select.Option>
                    </Select>)}
                </FormItem>
                <p className="detail__hint"><FormattedMessage id="INPUT_LOCATION" /></p>
                <FormItem label={<FormattedMessage id="INPUT_COUNTRY" />}>
                  {getFieldDecorator('countryId')(
                    <Select>
                      {countries.map(({ id, name }) => (<Select.Option key={id}>{name}</Select.Option>))}
                    </Select>)}
                </FormItem>
                <FormItem label={<FormattedMessage id="INPUT_CITY" />}>
                  {getFieldDecorator('provinceId')(
                    <Select>
                      {cities.map(({ id, name }) => (<Select.Option key={id}>{name}</Select.Option>))}
                    </Select>)}
                </FormItem>
                <FormItem label={<FormattedMessage id="INPUT_AREA_CODE" />}>
                  {getFieldDecorator('geoCode')(<Input />)}
                </FormItem>
                <FormItem label={<FormattedMessage id="INPUT_DISTRIC" />}>
                  {getFieldDecorator('district')(<Input />)}
                </FormItem>
                <FormItem label={<FormattedMessage id="INPUT_HOME_NO" />}>
                  {getFieldDecorator('address')(<Input.TextArea />)}
                </FormItem>
                <FormItem label={<FormattedMessage id="INPUT_STREET" />}>
                  {getFieldDecorator('street')(<Input.TextArea />)}
                </FormItem>
              </div>
            </div>
            <div className="col-6">
              <div className="box">
                <h3 className="detail__title">
                  <span>Bản đồ khách sạn</span>
                </h3>
                <Map />
              </div>
              <div className="box">
                <h3 className="detail__title">
                  <FormattedMessage id="INPUT_CONTACT_INFO" />
                </h3>
                <FormItem label={<FormattedMessage id="CONTACT_NAME" />}>
                  {getFieldDecorator('contactName')(<Input />)}
                </FormItem>
                <FormItem label={<FormattedMessage id="PHONE" />}>
                  <Input />
                </FormItem>
                <FormItem label={<FormattedMessage id="EMAIL" />}>
                  {getFieldDecorator('email')(<Input />)}
                </FormItem>
                <div>
                  <Button type="primary" onClick={this.onSave}>
                    <FormattedMessage id="SAVE_AND_NEXT" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </React.Fragment >)
  }
}

const FormWrapper = Form.create()(HotelDetail);
export default withRouter(injectIntl(FormWrapper));