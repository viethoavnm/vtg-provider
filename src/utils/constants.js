export const DEFAULT_LANG = 'en-US';
export const BASE_URL = process.env.NODE_ENV === "development" ? '' : '/vtgdev/';
export const RESOURCES_PATH = BASE_URL + 'resources/';
export const TOKEN_KEY = 'token';
export const REFRESH_TOKEN_KEY = 'rfToken';
export const LOGOUT_KEY = 'logout';
export const ATTEMPT_URL = 'attemptURL_';
export const TOKEN_EXPIRED_TIME = 1/48;
export const TOKEN_COOKIE_PATH = 'provider';