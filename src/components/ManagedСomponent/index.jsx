import React, { Component } from 'react';
import styles from './style.module.css';
/*
18.01
керовані компоненти 


Події у реакті за замовченням виконуються синтетичною подією (уніфікованою подією для усіх браузерів, що повторює усі можливості стандартної події) але якщо сильно потрібно можно достучатись до стандартних подій за атрибутом nativeEvent

керований компонет - компонет оновленями\станом якого керує щось (react)

onChange = 
this.setState({
  [name]: value,
});

буде працювати для усіх окрім checkbox у нього замість value => isChecked
*/
const initialValues = {
  email: '',
  password: '',
  isRemebered: false,
  isEmailValid: true
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialValues,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    // console.log(e.target.elements.email.value);
    // console.log(e.target.elements.password.value);
    // const {} = e;

    console.log(email);
    console.log(password);

    // e.target.reset();
    this.setState({
      ...initialValues,
    });
  };

  // handleEmailChange = (e) => {
  //   console.log(e.target.value);

  //   this.setState({
  //     email: e.target.value,
  //   });
  // };

  /*
    зробити керованим інпут з паролем
  */

  // handlePasswordChange = ({ target: { value } }) => {
  //   this.setState({ password: value });
  // };

  handleChange = ({ target: { name, value, checked, type } }) => {
    const isCheckbox = type === 'checkbox';

    const newState = {
      [name]: isCheckbox ? checked : value,
    };

    if(name === 'email') {
      newState.isEmailValid = !value.includes(' ');
    }

    this.setState(newState);
  };

  render() {
    const { email, password, isRemebered, isEmailValid } = this.state;

    const emailClassNames = `input ${isEmailValid ? styles.validInput : styles.invalidInput}`;

    return (
      <form onSubmit={this.handleSubmit} className={styles.container}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={emailClassNames}
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className='input'
          value={password}
          onChange={this.handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="isRemebered"
            checked={isRemebered}
            onChange={this.handleChange}
          />{' '}
          Is remembered
        </label>

        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;