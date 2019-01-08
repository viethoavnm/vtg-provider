import jsCookie from 'js-cookie';
import { ATTEMPT_URL } from 'consts';

export function saveAttemptUrl(url) {
  switch (url) {
    case '/login':
    case '/register':
    case '/forgot':
    case '/notAuthorized':
    case '/notFound':
      jsCookie.set(ATTEMPT_URL, '/');
      break;
    default:
      jsCookie.set(ATTEMPT_URL, url);
      break;
  }
}

export function redirectToAttemptedUrl() {
  const url = jsCookie.get(ATTEMPT_URL) || '/';
  window.location = `#${url}`;
}