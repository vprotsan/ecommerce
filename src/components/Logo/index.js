import React, { PropTypes } from 'react';
import logo from '../../assets/magicleap.png'

class Logo extends React.Component {

  render() {
    return (
      <header>
        <img src={logo} alt="Magic leap logo" />
      </header>
    )
  }

}

export default Logo;
