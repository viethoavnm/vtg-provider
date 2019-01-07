/**
 * Common reducer 
 *  - Switch locale
 */
import create from 'utils/createReducer';
import { DEFAULT_LANG } from 'consts';
const SWITCH_LOCALE = 'SWITCH_LOCALE';

const initState = {
  locale: DEFAULT_LANG,
  user: {},
  loggedIn: false
}

const handlers = {
  [SWITCH_LOCALE]: (state, action) => ({ ...state, locale: action.payload })
}

export default create(initState, handlers);