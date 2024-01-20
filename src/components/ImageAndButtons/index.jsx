import Button from './ButtonForImg';
import style from './imageAndButtons.module.css';

function ImageAndButtons({funOnClick, imgSrc}) {
  return (
    <div className={style.container}>
      <img
        src={imgSrc}
        alt="img"
      />
      <Button text='<' isLeft onClickFun={()=>funOnClick(false)}/>
      <Button text='>' onClickFun={()=>funOnClick(true)}/>
    </div>
  );
}

export default ImageAndButtons;
