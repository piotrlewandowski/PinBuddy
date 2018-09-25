import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  type,
  disabled,
  t,
  onClick,
}) => (
  <button
    className="button"
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {t}
  </button>
);

Button.propTypes = {
  t: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  onClick: null,
};

export default Button;
