import React from 'react'
import './Navbar.scss'

import logo from '../../assets/logo.png'

// Icones
import { TbHome2, TbBooks, TbQuestionMark, TbCertificate } from 'react-icons/tb'

function setActive(page){
    document.querySelector(`#icon-${page}`).classList.add("active")
}

function goToLink(page){
    window.location.assign(`/${page}`)
}

function Navbar(props) {
    
    return (
        <div className='navbar-container' onLoad={() => {setActive(props.current)}}>
            
            <div className='img-logo'>
                <img src={logo} className='navbar-logo' alt="Logo Herbert" onClick={() => {goToLink("Home")}}/>
            </div>
            
            <div className='navbar-items'>

                <TbHome2 className="navbar-icon" id="icon-Home" onClick={() => {goToLink("Home")}}/>   
 
                <TbBooks className="navbar-icon" id="icon-Library"/>   
                
                <TbQuestionMark className="navbar-icon" id="icon-Quizz"/>   
                
                <TbCertificate className="navbar-icon" id="icon-Simulate"/>   
            
            </div>

        </div>
    )
}

export default Navbar