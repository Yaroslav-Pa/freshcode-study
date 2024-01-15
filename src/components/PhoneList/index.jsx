import React from 'react';
import Phone from '../Phone';

class PhoneList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDirectSortOrder: true,
      phones: [
        {
          id: 0,
          color: 'black',
          price: 15999.99,
        },
        {
          id: 1,
          color: 'white',
          price: 9999.99,
        },
        {
          id: 2,
          color: 'gold',
          price: 59999.99,
        },
      ],
    };
  }

  toggleSortOrder = () => {
    /*
      1. взяти масив зі стейту
      2. перевернути його
      3. оновити стан, не забути змінити змінну яка стежить за порядком масиву
    */

    // 1. взяти масив зі стейту
    const { phones, isDirectSortOrder } = this.state;

    // 2. перевернути його
    // const phonesCopy = JSON.parse(JSON.stringify(phones));
    const phonesCopy = structuredClone(phones);
    phonesCopy.reverse();

    // 3. оновити стан, не забути змінити змінну яка стежить за порядком масиву
    this.setState({
      isDirectSortOrder: !isDirectSortOrder,
      phones: phonesCopy,
    });
  };

  render() {
    const { phones, isDirectSortOrder } = this.state;

    // const elems = (
    //   <>
    //     <Phone color="black" price={15999.99} />
    //     <button>sdsadsa</button>
    //   </>
    // );

    // ви можете зробити мапом масиви реакт елементів / компонентів
    // і відрендерити їх одразу
    // Верхньому елементу / компоненту який ви повертаєте з мапи
    // НЕОБХІДНО вказати унікальний для цього списка службовий проп
    // key
    const phonesComponents = phones.map((phone) => (
      <Phone key={phone.id} color={phone.color} price={phone.price} />
    ));

    // тут вже можна такий самий набір ключів як і у phonesComponents
    const phonesComponents2 = phones.map((phone) => (
      <Phone key={phone.id} color={phone.color} price={phone.price} />
    ));

    return (
      <>
        <button onClick={this.toggleSortOrder}>Reverse sort order</button>
        <p>
          Current sort order is: {isDirectSortOrder ? 'direct' : 'reversed'}
        </p>
        <ul>{phonesComponents}</ul>
      </>
    );
  }
}

export default PhoneList;