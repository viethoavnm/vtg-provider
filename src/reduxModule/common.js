/**
 * Common reducer 
 *  - Switch locale
 */
import api from '../utils/api';
import jsCookie from 'js-cookie';
import jwtDecode from 'jwt-decode';
import create from 'utils/createReducer';
import { redirectToAttemptedUrl } from 'utils/url';
import { DEFAULT_LANG, TOKEN_KEY, LOGOUT_KEY, LOGIN_KEY, TOKEN_EXPIRED_TIME } from 'consts';

const SET_INFO = 'SET_INFO';
const LOGGED_IN = 'LOGGED_IN';
const LOGGED_OUT = 'LOGGED_OUT';
const SWITCH_LOCALE = 'SWITCH_LOCALE';

/**
 * Check login information when loading app.
 */
function getLogginInfo() {
  const token = jsCookie.get(TOKEN_KEY);
  if (!token)
    return undefined;
  const user = jwtDecode(token);
  return user;
}

const loggedIn = getLogginInfo();

const initState = {
  locale: DEFAULT_LANG,
  user: loggedIn || {},
  loggedIn: !!loggedIn,
  info: {}
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
        } catch (error) { }
      })
  }
}

export function requestLogin(token) {
  jsCookie.set(TOKEN_KEY, token, { expires: TOKEN_EXPIRED_TIME });
  localStorage.setItem(LOGIN_KEY, Date.now());
  const user = jwtDecode(token);
  return dispatch => {
    dispatch({
      type: LOGGED_IN,
      payload: user
    })
    redirectToAttemptedUrl();
  }
}

export function verifyLogin() {
  const user = getLogginInfo();
  if (user)
    return dispatch => {
      dispatch({
        type: LOGGED_IN,
        payload: user
      })
      redirectToAttemptedUrl();
    }
}

export function requestLogout() {
  jsCookie.remove(TOKEN_KEY);
  localStorage.setItem(LOGOUT_KEY, Date.now());
  return {
    type: LOGGED_OUT
  }
}

export default create(initState, handlers);