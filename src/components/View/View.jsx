import React from 'react'
import Home from '../../page/Home'
import './View.scss'

function View(props) {

    let user = props.user
    
    if(props.page === "Home"){
        return (
            <Home type={user["Nivel"]} data={user} setPage={props.setPage}/>
        )
    }
}

export default View