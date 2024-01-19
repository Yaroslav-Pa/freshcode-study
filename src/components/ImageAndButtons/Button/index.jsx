import style from './button.module.css';

function Buttons({ onClickFun, text, isLeft }) {
  return (
    <button onClick={onClickFun} style={ isLeft ?  {left : 10} : {right : 10}} className={style.buttonOnImg}>
      {text}
    </button>
  );
}

export default Buttons;
