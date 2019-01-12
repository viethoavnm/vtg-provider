import loadable from 'react-loadable';
import Loading from 'components/Loading';
import './app.less';

export const NotFound = loadable({
  loader: () => import('./error-page/NotFound'),
  loading: Loading
})

export const NotAuthorized = loadable({
  loader: () => import('./error-page/NotAuthorized'),
  loading: Loading
})

export const Login = loadable({
  loader: () => import('./auth/Login'),
  loading: Loading
})

export const Register = loadable({
  loader: () => import('./auth/Register'),
  loading: Loading
})

export const InputHotel = loadable({
  loader: () => import('./hotel/InputHotel'),
  loading: Loading
})
