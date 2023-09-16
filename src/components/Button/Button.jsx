import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onClick, text, disabled }) => (
  <div className={css.wrapper}>
    <button
      className={css.Button}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      {text}
    </button>
  </div>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
