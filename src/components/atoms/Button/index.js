import React from "react";

const Button = ({ onClick, children, ...restProps }) => {
  return (
    <button {...restProps}  onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
