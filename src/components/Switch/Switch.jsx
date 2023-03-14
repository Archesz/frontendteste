import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Switch.scss';

function Switch() {
  const [isOn, setIsOn] = useState(false);

  function toggleSwitch() {
    setIsOn(!isOn);
  }

  return (
    <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
      <div className="icon-container">
        <FaSun className={`sun-icon ${isOn ? 'hidden' : ''}`} />
        {isOn && <div className="ball"></div>}
      </div>
      <div className="icon-container">
        <FaMoon className={`moon-icon ${isOn ? '' : 'hidden'}`} />
        {!isOn && <div className="ball"></div>}
      </div>
    </div>
  );
}

export default Switch;
