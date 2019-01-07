import loadable from 'react-loadable';
import Loading from 'components/Loading';
import 'components/Style/style.less';

export const NotFound = loadable({
  loader: () => import('./error-page/NotFound'),
  loading: Loading
})

export const NotAuthorized = loadable({
  loader: () => import('./error-page/NotAuthorized'),
  loading: Loading
})
