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

export const HotelDetail = loadable({
  loader: () => import('./hotel/HotelDetail'),
  loading: Loading
})

export const HotelManagement = loadable({
  loader: () => import('./hotel/Management'),
  loading: Loading
})

export const HotelPreview = loadable({
  loader: () => import('./hotel/HotelPreview'),
  loading: Loading
})

export const RoomManagement = loadable({
  loader: () => import('./room/RoomManagement'),
  loading: Loading
})
