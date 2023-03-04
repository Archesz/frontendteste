import React, { useState } from 'react';
import './Avatar.scss'

function Avatar(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="circle-menu">
      <img className="circle" onClick={handleToggle} src={props.url}/>
      {isOpen && (
        <ul className="menu">
          <li>Perfil</li>
          <li>Configurações</li>
          <li>Sair</li>
        </ul>
      )}
    </div>
  );
}

export default Avatar;
