import { AUTO_LOGOUT_TIME } from 'consts';
const SessionEventList = ['load', 'mousemove', 'mousedown', 'click', 'scroll', 'keypress'];

let timeOut;
function checkSessionTime() {
  if (timeOut) {
    clearTimeout(timeOut);
  }
  timeOut = setTimeout(function () {
    console.log("#endTime");
    if (timeOut) {
      clearTimeout(timeOut);
    }
  }, AUTO_LOGOUT_TIME)
}

export function startSession() {
  SessionEventList.forEach((event) => { window.addEventListener(event, checkSessionTime) });
}

export function endSesstion() {
  SessionEventList.forEach((event) => { window.removeEventListener(event, checkSessionTime) });
}