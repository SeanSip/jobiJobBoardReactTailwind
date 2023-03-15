import React from 'react';

function Button({ text, className, ...rest }) {
  return <button>{text}</button>;
}

export default Button;
