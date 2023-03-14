import React from 'react'
import '../styles/home.scss'
import Button from '../components/Button/Button'
import DisciplinaIcon from '../components/DisciplinaIcon/DisciplinaIcon'
import ProgressBar from '../graphs/ProgressBar/ProgressBar'

import Today from '../components/Today/Today'
import News from '../components/News/News'
import Hecomend from '../components/Hecomend/Hecomend'

import { TbMathFunction, TbDna2, TbAtom, TbMap, TbSocial, TbBook2, TbPencil, TbBook } from 'react-icons/tb'
import { GiErlenmeyer, GiDinosaurBones, GiLogicGateOr} from 'react-icons/gi'

function Home(props) { 

    const objetoSerializado = localStorage.getItem("HerbertData");

    const data = JSON.parse(objetoSerializado)[0];
    
    function goToDisciplina(disciplina){
        localStorage.setItem("Disciplina", disciplina);
        window.location.assign("/Disciplina")
    }

    if(props.type === "Estudante"){
        return (
            <div className='home-container'>
                
                <div className='home-col'>

                    <div className='home-row'>

                        <div className='home-perfil'>
                            
                            <div className='perfil-infos'>

                                <img src={data["URLFoto"]} className='perfil-foto' alt="Foto de Perfil"/>
                                
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
                                    <span className='label-col'>Disciplinas</span>

                                    <div className='disciplinas'>
                                        <DisciplinaIcon materia="Matemática" icon={<TbMathFunction className='icon'/>} color="red" onClick={() => {goToDisciplina("Matemática")}}/>
                                        <DisciplinaIcon materia="Física" icon={<TbAtom className='icon'/>} color="green" onClick={() => {goToDisciplina("Física")}}/>
                                        <DisciplinaIcon materia="Química" icon={<GiErlenmeyer className='icon'/>} color="green" onClick={() => {goToDisciplina("Química")}}/>
                                        <DisciplinaIcon materia="Biologia" icon={<TbDna2 className='icon'/>} color="green" onClick={() => {goToDisciplina("Biologia")}}/>
                                        <DisciplinaIcon materia="Geografia" icon={<TbMap className='icon'/>} color="yellow" onClick={() => {goToDisciplina("Geografia")}}/>
                                        <DisciplinaIcon materia="História" icon={<GiDinosaurBones className='icon'/>} color="yellow" onClick={() => {goToDisciplina("História")}}/>
                                        <DisciplinaIcon materia="Filosofia" icon={<GiLogicGateOr className='icon'/>} color="yellow" onClick={() => {goToDisciplina("Filosofia")}}/>
                                        <DisciplinaIcon materia="Sociologia" icon={<TbSocial className='icon'/>} color="yellow" onClick={() => {goToDisciplina("Sociologia")}}/>
                                        <DisciplinaIcon materia="Literatura" icon={<TbBook2 className='icon'/>} color="blue" onClick={() => {goToDisciplina("Literatura")}}/>
                                        <DisciplinaIcon materia="Gramática" icon={<TbPencil className='icon'/>} color="blue" onClick={() => {goToDisciplina("Gramática")}}/>
                                        <DisciplinaIcon materia="Redação" icon={<TbBook className='icon'/>} color="blue" onClick={() => {goToDisciplina("Redação")}}/>
                                    </div>

                                </div>

                                <div className='perfil-data'>
                                    
                                    <span className='label-col'>Desempenho e Interesses</span>
                                    
                                    <div className='barras'>
                                        <ProgressBar percentage={data["Interesses"]["Exatas"]} label="Exatas"/>
                                        <ProgressBar percentage={data["Interesses"]["Natureza"]} label="Natureza"/>
                                        <ProgressBar percentage={data["Interesses"]["Humanidades"]} label="Humanidades"/>
                                        <ProgressBar percentage={data["Interesses"]["Linguagens"]} label="Linguagens"/>
                                        <ProgressBar percentage={data["Interesses"]["Tecnologia"]} label="Tecnologia"/>
                                        <ProgressBar percentage={data["Interesses"]["Ciência"]} label="Ciência"/>
                                        <ProgressBar percentage={data["Interesses"]["Arte"]} label="Arte"/>
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