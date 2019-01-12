let attemptUrl = '/';

export function saveAttemptUrl(url) {
  switch (url) {
    case '/login':
    case '/register':
    case '/forgot':
    case '/notAuthorized':
    case '/notFound':
      break;
    default:
    attemptUrl = url;
      break;
  }
}

export function redirectToAttemptedUrl() {
  window.location = `#${attemptUrl}`;
}