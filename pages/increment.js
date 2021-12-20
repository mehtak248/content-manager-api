import React, { Component, useState } from 'react';

const CompA = () => {
  const [myValue, setMyValue] = useState(10);

  const changeValue = (currentValue) => {
    setMyValue(myValue + currentValue)
  }

  return(
    <>
      <h1>CompA</h1>
      <h2>Value: { myValue }</h2>
      <button onClick={() => changeValue(+1)}>+</button>
      <button onClick={() => changeValue(-1)}>-</button>
    </>
  )
}

class CompB extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      newValue: 20
    }
  }

  changeNewValue(incementor) {
    this.setState({
      newValue: incementor
      // newValue: this.state.newValue + incementor
    })
  }
  
  render() {

    const  { newValue } = this.state;

    return(
      <>
        <h1>CompB</h1>
        <h2>New value: { newValue }</h2>
        <button onClick={() => this.changeNewValue(newValue+1)}>+</button>
        <button onClick={() => this.changeNewValue(newValue-1)}>-</button>
      </>   
    )
  }
}

const newValue = 20;

const Increment = () => {
  return (
    <>
      <h1>Increment Page</h1>
      <CompA />
      <CompB />
    </>
  )
}

export default Increment;