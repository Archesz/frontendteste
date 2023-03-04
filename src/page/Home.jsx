import React from 'react'
import '../styles/home.scss'
import Avatar from '../components/Avatar/Avatar'
import Button from '../components/Button/Button'
import DisciplinaIcon from '../components/DisciplinaIcon/DisciplinaIcon'

import Today from '../components/Today/Today'
import News from '../components/News/News'
import Hecomend from '../components/Hecomend/Hecomend'

import { TbMathFunction, TbDna2, TbAtom, TbMap, TbSocial, TbBook2, TbPencil, TbBook } from 'react-icons/tb'
import { GiErlenmeyer, GiDinosaurBones, GiLogicGateOr} from 'react-icons/gi'

function Home(props) { 

    let data = props.data
    
    if(props.type === "student"){
        return (
            <div className='home-container'>

                <div className='home-menu'></div>

                <div className='home-col'>

                    <div className='home-header'>
                        
                        <span className='header-name'>Olá, {data["Apelido"]}</span>

                        <div className='header-icons'>

                            <Avatar url={data["URLFoto"]}/>

                        </div>

                    </div>

                    <div className='home-row'>

                        <div className='home-perfil'>
                            
                            <div className='perfil-infos'>

                                <img src={data["URLFoto"]} className='perfil-foto'/>
                                
                                <div className='perfil-col'>
                                    <div className='badge student'>{data['Status']}</div>
                                    <span className='perfil-name'>{data['Primeiro Nome']} {data['Sobrenome']}</span>

                                    <div className='perfil-academic'>

                                        <div className='row'>
                                            <span className='label'>Curso: <span className='resposta'>{data["Curso"]}</span></span>
                                            <span className='label'>Universidade: <span className='resposta'>{data["Universidade"]}</span></span>
                                        </div>
    
                                        <div className='row'>
                                            <span className='label'>Turma: <span className='resposta'>{data["Turma"]}</span></span>
                                            <span className='label'>Periodo: <span className='resposta'>{data["Periodo"]}</span></span>
                                        </div>     

                                        <Button text="Perfil Completo" styles="long primary bright"/>

                                    </div>

                                </div>

                            </div>

                            <div className='perfil-row'>

                                <div className='perfil-desempenho'>
                                    <span className='perfil-label'>Disciplinas</span>

                                    <div className='disciplinas'>
                                        <DisciplinaIcon materia="Matemática" icon={<TbMathFunction className='icon'/>} color="red"/>
                                        <DisciplinaIcon materia="Física" icon={<TbAtom className='icon'/>} color="green"/>
                                        <DisciplinaIcon materia="Química" icon={<GiErlenmeyer className='icon'/>} color="green"/>
                                        <DisciplinaIcon materia="Biologia" icon={<TbDna2 className='icon'/>} color="green"/>
                                        <DisciplinaIcon materia="Geografia" icon={<TbMap className='icon'/>} color="yellow"/>
                                        <DisciplinaIcon materia="História" icon={<GiDinosaurBones className='icon'/>} color="yellow"/>
                                        <DisciplinaIcon materia="Filosofia" icon={<GiLogicGateOr className='icon'/>} color="yellow"/>
                                        <DisciplinaIcon materia="Sociologia" icon={<TbSocial className='icon'/>} color="yellow"/>
                                        <DisciplinaIcon materia="Literatura" icon={<TbBook2 className='icon'/>} color="blue"/>
                                        <DisciplinaIcon materia="Gramática" icon={<TbPencil className='icon'/>} color="blue"/>
                                        <DisciplinaIcon materia="Redação" icon={<TbBook className='icon'/>} color="blue"/>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className='home-cards'>
                            <News />
                            <Today />
                            <Hecomend />
                        </div>

                    </div>

                </div>


            </div>
        )
    }
}

export default Home