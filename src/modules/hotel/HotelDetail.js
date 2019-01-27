import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { FormattedMessage } from 'intl';
import { withRouter } from 'react-router-dom';

const FormItem = Form.Item;
const Option = Select.Option;

const prefixSelector =
  (<Select style={{ width: 70 }}>
    <Option value="86">+86</Option>
    <Option value="87">+87</Option>
  </Select>)

class HotelDetail extends React.Component {
  render() {
    const addMode = !this.props.match.params.id;
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
                  <Input />
                </FormItem>
              </div>
              <div className="col-6">
                <FormItem
                  label={<FormattedMessage id="INPUT_ENGLISH" />}
                  help={<FormattedMessage id="INPUT_ENGLISH_GUILD" />}>
                  <Input />
                </FormItem>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <FormItem
                  label={<FormattedMessage id="INPUT_HOTEL_TYPE" />}
                  help={<FormattedMessage id="INPUT_LOCATION" />}>
                  <Select></Select>
                </FormItem>
                <FormItem label={<FormattedMessage id="INPUT_COUNTRY" />}>
                  <Select></Select>
                </FormItem>
                <FormItem label={<FormattedMessage id="INPUT_CITY" />}>
                  <Select></Select>
                </FormItem>
                <FormItem label={<FormattedMessage id="INPUT_AREA_CODE" />}>
                  <Select></Select>
                </FormItem>
              </div>
              <div className="col-6">
                <div className="mini-map" />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <FormItem label={<FormattedMessage id="INPUT_DISTRIC" />}>
                  <Input />
                </FormItem>
                <FormItem label={<FormattedMessage id="INPUT_HOME_NO" />}>
                  <Input.TextArea />
                </FormItem>
              </div>
              <div className="col-6">
                <FormItem label={<FormattedMessage id="INPUT_STREET" />}>
                  <Input />
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


export default withRouter(HotelDetail);