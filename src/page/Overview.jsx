import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import View from '../components/View/View'

import '../styles/global.scss'

function Overview(props) {

    let user = props.user
    const [page, setPage] = useState("Home")
    
    return (
        <div className='container'>
            
            <Navbar setPage={setPage} current={props.current}/>
            
            <div className='container-col'>
                <Header data={user}/>
                <View page={page} setPage={setPage} user={user}/>
            </div>

        </div>
    )
}

export default Overview

