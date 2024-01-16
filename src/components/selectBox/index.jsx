import React from 'react';
class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const selectedUsers = this.props.users.filter((user) => user.isSelected);

    const listedUsers = selectedUsers.map(({ id, name }) => 
    <p key={id} className="m-2 bg-green-400 rounded-md p-2 text-white font-bold">{name}</p>)


    return (
      <div className=" border-2 border-gray-400 border-solid max-w-[200px] h-max rounded-md bg-white transition-all">
        <p className=" border-b-2 border-gray-400 p-2">Вибрані люди:</p>
        <div className='py-2'>
          {selectedUsers.length ? listedUsers : <p className='m-2 bg-sky-400 rounded-md p-2 text-white font-bold'>Жодної</p>}
        </div>
      </div>
    );
  }
}

export default SelectBox;
