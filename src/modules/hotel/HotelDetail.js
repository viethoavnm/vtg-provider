import React from 'react';
import api from 'utils/api';
import { FormattedMessage } from 'intl';
import { withRouter } from 'react-router-dom';
import { Form, Input, Select, Button, Divider } from 'antd';

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

  onSave = () => {
    const id = this.props.match.params.id || 1;
    this.props.history.push(`/preview/${id}`)
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
      <React.Fragment>
        <div className="wrapper__title title">
          <div className="title__left">
            <h3 className="title__main"><FormattedMessage id="HELLO_NAME" values={{ name: 'Trần Việt Hòa' }} /></h3>
            <p className="title__small"><FormattedMessage id="INPUT_HOTEL_TEXT_DES" /></p>
          </div>
          <div className="title__right">
          </div>
        </div>
        <Form>
          <div className="box detail">
            <h3 className="detail__title">
              <FormattedMessage id="INPUT_HOTEL_INFO" />
            </h3>
            <div className="detail__hint"><FormattedMessage id="INPUT_HOTEL_NAME" /></div>
            <div className="row">
              <div className="col-6">
                <FormItem label={<FormattedMessage id="INPUT_VIETNAMESE" />}>
                  {getFieldDecorator('name')(<Input />)}
                </FormItem>
              </div>
              <div className="col-6">
                <FormItem
                  label={<FormattedMessage id="INPUT_ENGLISH" />}
                  help={<small className="detail__hint"><FormattedMessage id="INPUT_ENGLISH_GUILD" /></small>}>
                  {getFieldDecorator('nameEnglish')(<Input />)}
                </FormItem>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <FormItem label={<FormattedMessage id="INPUT_HOTEL_TYPE" />}>
                  {getFieldDecorator('hotelType')(<Select></Select>)}
                </FormItem>
                <p className="detail__hint"><FormattedMessage id="INPUT_LOCATION" /></p>
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
            <Divider />
            <h3 className="detail__title">
              <FormattedMessage id="INPUT_CONTACT_INFO" />
            </h3>
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
            <div>
              <Button type="primary" onClick={this.onSave}>
                <FormattedMessage id="SAVE_AND_NEXT" />
              </Button>
            </div>
          </div>
        </Form>
      </React.Fragment >)
  }
}

const FormWrapper = Form.create()(HotelDetail);
export default withRouter(FormWrapper);