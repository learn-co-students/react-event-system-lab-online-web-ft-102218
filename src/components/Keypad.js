import React from 'react'

class Keypad extends React.Component {

  onKeyPress = () => console.log('Entering password...')
  render() {
    return (
      <input type="password" onKeyUp={this.onKeyPress} />
    )
  }
}

export default Keypad;