import React from 'react';
import Error from './ErrorPage';

const NotAuthorized = () => (<Error code={401} message="You are not authorized" />)

export default NotAuthorized;