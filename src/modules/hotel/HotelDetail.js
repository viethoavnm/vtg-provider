import React from 'react';
import api from 'utils/api';
import { FormattedMessage } from 'intl';
import { withRouter } from 'react-router-dom';
import { Form, Input, Select, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const prefixSelector =
  (<Select style={{ width: 70 }}>
    <Option value="86">+86</Option>
    <Option value="87">+87</Option>
  </Select>)

class HotelDetail extends React.Component {
  fetch = () => {
    api.getHotelDetail(this.props.match.params.id)
      .then((data) => {
        this.props.form.setFieldsValue(data);
      })
      .catch()
  }

  componentDidMount() {
    if (!!this.props.match.params.id) {
      this.fetch();
    }
  }

  render() {
    const addMode = !this.props.match.params.id;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="container content">
        <Form>
          <div className="">
            <h2><FormattedMessage id="HELLO_NAME" values={{ name: addMode }} /></h2>
            <FormattedMessage id="INPUT_HOTEL_TEXT_DES" />
          </div>
          <div className="box">
            <label className="box__title">
              <FormattedMessage id="INPUT_HOTEL_INFO" />
            </label>
            <FormattedMessage id="INPUT_HOTEL_NAME" />
            <div className="row">
              <div className="col-6">
                <FormItem label={<FormattedMessage id="INPUT_VIETNAMESE" />}>
                  {getFieldDecorator('name')(<Input />)}
                </FormItem>
              </div>
              <div className="col-6">
                <FormItem
                  label={<FormattedMessage id="INPUT_ENGLISH" />}
                  help={<FormattedMessage id="INPUT_ENGLISH_GUILD" />}>
                  {getFieldDecorator('nameEn')(<Input />)}
                </FormItem>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <FormItem
                  label={<FormattedMessage id="INPUT_HOTEL_TYPE" />}
                  help={<FormattedMessage id="INPUT_LOCATION" />}>
                  {getFieldDecorator('hotelType')(<Select></Select>)}
                </FormItem>
                <FormItem label={<FormattedMessage id="INPUT_COUNTRY" />}>
                  {getFieldDecorator('countryId')(<Select></Select>)}
                </FormItem>
                <FormItem label={<FormattedMessage id="INPUT_CITY" />}>
                  {getFieldDecorator('provinceId')(<Select></Select>)}
                </FormItem>
                <FormItem label={<FormattedMessage id="INPUT_AREA_CODE" />}>
                  {getFieldDecorator('geoCode')(<Input />)}
                </FormItem>
              </div>
              <div className="col-6">
                <div className="mini-map" />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <FormItem label={<FormattedMessage id="INPUT_DISTRIC" />}>
                  {getFieldDecorator('distric')(<Input />)}
                </FormItem>
                <FormItem label={<FormattedMessage id="INPUT_HOME_NO" />}>
                  {getFieldDecorator('address')(<Input.TextArea />)}
                </FormItem>
              </div>
              <div className="col-6">
                <FormItem label={<FormattedMessage id="INPUT_STREET" />}>
                  {getFieldDecorator('street')(<Input.TextArea />)}
                </FormItem>
              </div>
            </div>
          </div>
          <div className="box">
            <label className="box__title">
              <FormattedMessage id="INPUT_CONTACT_INFO" />
            </label>
            <div className="row">
              <div className="col-6">
                <FormItem label={<FormattedMessage id="CONTACT_NAME" />}>
                  <Input />
                </FormItem>
                <FormItem label={<FormattedMessage id="PHONE" />}>
                  <Input addonBefore={prefixSelector} />
                </FormItem>
                <FormItem label={<FormattedMessage id="EMAIL" />}>
                  <Input />
                </FormItem>
              </div>
            </div>
          </div>
          <div>
          </div>
          <div>
            <Button>
              <FormattedMessage id="SAVE_AND_NEXT" />
            </Button>
          </div>
        </Form>
      </div >)
  }
}

const FormWrapper = Form.create()(HotelDetail);
export default withRouter(FormWrapper);