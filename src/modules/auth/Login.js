import React from 'react';
import Axios from 'axios';
import { BASE_URL } from 'consts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestLogin } from 'reduxModule/common';
import { redirectToAttemptedUrl } from 'utils/url';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import logo from './logo.png';
import './auth.less';

const FormItem = Form.Item

class NormalLoginForm extends React.Component {
  state = { loading: false }

  componentDidMount() {
    if (this.props.loggedIn) {
      redirectToAttemptedUrl();
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, { username, password }) => {
      if (!err) {
        this.setState({ loading: true })
        Axios.post(
          BASE_URL + 'oauth/token',
          `username=${username}&password=${password}&grant_type=password`,
          {
            headers: {
              'Authorization': 'Basic Zm9vQ2xpZW50SWRQYXNzd29yZDpzZWNyZXQ=',
              'Content-type': 'application/x-www-form-urlencoded'
            }
          })
          .then(({ data }) => {
            this.setState({ loading: false })
            this.props.requestLogin(data.access_token)
          })
          .catch(() => {
            this.setState({ loading: false })
            this.props.form.setFields({
              username: { value: username, errors: [new Error(this.t('Username invalid'))] },
              password: { value: password, errors: [new Error(this.t('Password invalid'))] }
            })
          })
      }
    })
  }

  t = (id) => (this.props.intl.formatMessage({ id }))

  render() {
    const { getFieldDecorator } = this.props.form
    const { loading, error } = this.props
    const validateStatus = error ? 'error' : loading ? 'validating' : undefined
    return (
      <div className="gradient">
        <div className="auth-nest container">
          <div className="auth--left">
            <div className="logo">
              <img src={logo} alt="spetrip.com" />
            </div>
            <h4>
              Chào mừng bạn đến với Spetrip - Kênh cho thuê.<br />
              Bạn vui lòng đăng nhập để tiếp tục!
            </h4>
          </div>
          <div className="auth">
            <Form onSubmit={this.handleSubmit} className="form-login">
              <h3 className="auth__title"><FormattedMessage id="Login" /></h3>
              <FormItem validateStatus={validateStatus}>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: this.t('Username invalid') }],
                })(
                  <Input prefix={<Icon type="user" />} placeholder={this.t('Username')} />
                )}
              </FormItem>
              <FormItem validateStatus={validateStatus}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: this.t('Password invalid') }],
                })(
                  <Input prefix={<Icon type="lock" />} type="password" placeholder={this.t('Password')} />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>{this.t('Remember me')}</Checkbox>
                )}
                <Link className="form-login__forgot" to="/forgot">{this.t('Forgot password')}</Link>
              </FormItem>
              <Button type="primary" htmlType="submit" className="form-login__btn-login" loading={this.state.loading}>
                {this.t('Login')}
              </Button>
              <div className="auth__spr">{this.t('Login or')}</div>
              <div className="auth__social">
                <div className="social-btn social-btn--fb">
                  <Icon type="facebook" theme="filled" />
                </div>
                <div className="social-btn social-btn--gp">
                  <Icon type="google" />
                </div>
              </div>
              {this.t('Login or')} <Link to="/register">{this.t('Register now')}!</Link>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm)

export default injectIntl(connect((state) => ({ loggedIn: state.common.loggedIn }), { requestLogin })(WrappedNormalLoginForm))