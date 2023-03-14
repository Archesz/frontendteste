import React, {useState} from 'react'
import DisciplinaIcon from '../components/DisciplinaIcon/DisciplinaIcon'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import '../styles/conteudo.scss'

import {TbPencilPlus, TbBook2, TbVideo} from 'react-icons/tb'
import ConteudoView from '../components/ConteudoView/ConteudoView'


function Conteudo(props) {
    let data = props.data
    let user = props.user

    const [type, setType] = useState("Material")

    return (
        <div className='conteudo-container'>

            <Navbar />

            <div className='conteudo-col'>

                <Header data={user}/>
                
                <span className='conteudo-name'>{data["Materia"]} - {data["Nome"]}</span>

                <div className='conteudo-options'>
                    <DisciplinaIcon materia="Material" icon={<TbBook2 className="option-icon"/>} onClick={() => {setType("Material")}}/>
                    <DisciplinaIcon materia="Fixação" icon={<TbPencilPlus className="option-icon"/>} onClick={() => {setType("Exercícios")}}/>
                    <DisciplinaIcon materia="Vídeos" icon={<TbVideo className="option-icon"/>} onClick={() => {setType("Vídeos")}}/>
                </div>

                <ConteudoView type={type} name={type} data={data}/>

            </div>

        </div>
    )
}

export default Conteudo