import React from 'react';

const ErrorPage = ({ code = 500, message }) => (
  <div className="error">
    <div>
      <h1 className="error__code">{code}</h1>
      <h2 className="error__message">{message}</h2>
    </div>
  </div>)

export default ErrorPage;