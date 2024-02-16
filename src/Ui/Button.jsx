import React from 'react';

const Button = ({ bgColor, content, ...prop }) => {
  let style = `px-8 py-2 rounded-full shadow-lg font-medium text-lg ${bgColor}`;
  return (
    <button {...prop} type='button' className={style}>
      {content}
    </button>
  );
};

export default Button;
