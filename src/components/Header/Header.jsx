import React from 'react'
import Avatar from '../Avatar/Avatar'
import Switch from '../Switch/Switch'

import './Header.scss'

function Header(props) {

    let data = props.data

    return (
        <div className='home-header'>

            <span className='header-name'>Olá, {data["Apelido"]}</span>

            <div className='header-icons'>

                <Switch />
                <Avatar url={data["URLFoto"]} />

            </div>

    </div>)
}

export default Header