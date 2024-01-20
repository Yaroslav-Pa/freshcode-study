import style from './Button.module.css'

function Button({buttonStyle, onClickFun, isDisabled, text}) {
  return (
    <button
      className={`${style.button} ${buttonStyle}`}
      onClick={onClickFun}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}

export default Button;
