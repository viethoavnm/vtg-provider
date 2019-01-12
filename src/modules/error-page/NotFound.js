import React from 'react';
import Error from './ErrorPage';

const NotFound = () => ((<Error code={404} message="Page not found !" />))

export default NotFound;