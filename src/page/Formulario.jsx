import React, {useState} from 'react'
import Form from '../components/Form/Form'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import '../styles/formulario.scss'

function Formulario(props) {

    const [cadastro, setCadastro] = useState("Estudante")

    return (
        <div className='formulario-container'>

            <Navbar />

            <div className='formulario-col'>
                <Header data={props.user}/>
    
                <span className='formulario-title'>Cadastro</span>

                <div className='formulario-tabs'>
                    <div className='formulario-tab active' id="estudanteForm" onClick={() => {setCadastro("Estudante")}}>Estudante</div>
                    <div className='formulario-tab' id="Form" onClick={() => {setCadastro("Professor")}}>Professor</div>
                    <div className='formulario-tab' id="estudanteForm" onClick={() => {setCadastro("Colaborador")}}>Infraestrutura</div>
                </div>

                <Form type={cadastro} base={props.base}/>

            </div>

        </div>
    )
}

export default Formulario
