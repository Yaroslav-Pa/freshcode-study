import React from 'react';
class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  toggleSelect = (e) => {
    if (e.target.tagName !== 'BUTTON') {
      this.setState({ isSelected: !this.state.isSelected });
    }
  };

  render() {
    const {
      user: { id, name, isMan, photo, like, dislike},
      removeUser
    } = this.props;
    const { isSelected } = this.state;
    return (
      <section
        className={
          'flex relative  max-w-[250px] rounded-md overflow-hidden flex-col justify-center items-center gap-2  pt-4 transition-all border-2 duration-300 self-stretch' +
          (isSelected
            ? ' border-green-400 bg-green-400 border-solid'
            : ' bg-sky-400 border-sky-400  border-solid')
        }
        onClick={(e) => {
          this.toggleSelect(e);
        }}
      >
        <img
          src={photo}
          alt="PhotoOfPerson"
          className=" max-w-40 rounded-full border-2 border-white border-solid"
        />
        <div className="flex flex-col gap-4 justify-center items-center bg-white px-5 py-3 text-[16px] w-full h-full">
          <p className=" absolute top-5 right-5 text-white">{id}</p>
          <h1 className=" font-bold text-[24px]">{name}</h1>
          <h2>{isMan ? 'Чоловік' : 'Жінка'}</h2>
          <h3 className=" text-center">Подобається: {like.join(', ')}</h3>
          <h3 className=" text-center">Не подобається: {dislike.join(', ')}</h3>
          <button
            type="button"
            className="mt-auto border-[1px] border-red-400 border-solid rounded-md px-2 hover:bg-red-400 hover:text-white transition-colors"
            onClick={()=>{removeUser(id)}}
          >
            Видалити
          </button>
        </div>
      </section>
    );
  }
}

export default UserCard;
