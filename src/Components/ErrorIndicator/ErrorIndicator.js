import React from 'react';
import classes from './ErrorIndicator.module.sass';

const ErrorIndicator = ({ error }) => {
  return (
    <div>
      <div className={classes.ErrorIndicator}>Error!</div>;
      <div className={classes.ErrorIndicator}>{error.message}</div>;
    </div>
  );
};

export default ErrorIndicator;
