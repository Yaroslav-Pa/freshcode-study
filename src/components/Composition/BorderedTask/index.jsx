import React from 'react';
class Bordered extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, padding, border, radius, isFlex} = this.props;
    return (
      <div
        style={{
          border: `${border}`,
          display: isFlex? 'flex': 'block',
          flexDirection: 'column',
          alignItems: 'center',
          padding: `${padding}`,
          maxWidth:'40%'
        }}
      >
        {children}
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RCLUPq1JgEPmHByabXOF8kuno6klS2moQ&usqp=CAU' alt='something'
        style={{borderRadius:`${radius}`}}/>
      </div>
    );
  }
}

export default Bordered;
