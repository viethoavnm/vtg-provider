/**
 * Common reducer 
 *  - Switch locale
 */
import api from '../utils/api';
import { DEFAULT_LANG } from 'consts';
import create from 'utils/createReducer';

const SWITCH_LOCALE = 'SWITCH_LOCALE';
const SET_INFO = 'SET_INFO';
const LOGGED_IN = 'LOGGED_IN';
const LOGGED_OUT = 'LOGGED_OUT';

const initState = {
  locale: DEFAULT_LANG,
  user: {},
  info: {},
  loggedIn: true
}

const handlers = {
  [SWITCH_LOCALE]: (state, action) => ({ ...state, locale: action.payload }),
  [SET_INFO]: (state, action) => ({ ...state, info: action.payload }),
  [LOGGED_IN]: (state, action) => ({ ...state, loggedIn: true, user: action.payload }),
  [LOGGED_OUT]: (state) => ({ ...state, loggedIn: false, user: {} }),
}

export function switchLocale(locale) {
  return ({ type: SWITCH_LOCALE, payload: locale })
}

export function fetchCompanyProfile() {
  return (dispatch) => {
    api.getSetting('CompanyProfile')
      .then((data) => {
        try {
          const info = JSON.parse(data);
          dispatch({
            type: SET_INFO,
            payload: info
          })
        } catch (error) {

        }

      })

  }
}

export default create(initState, handlers);