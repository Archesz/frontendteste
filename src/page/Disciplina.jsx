import React, { useEffect, useState } from 'react'
import '../styles/disciplina.scss'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Assunto from '../components/Assunto/Assunto'

function Disciplina(props){

    let data = props.data
    // let assuntos = Object.keys(data["Conteudos"])

    let disciplina = localStorage.getItem("Disciplina")
    const [conteudo, setConteudo] = useState([])
    const [assuntos, setAssuntos] = useState([])

    useEffect(() => {
        const usuariosRef = props.base.database().ref(`disciplinas/${disciplina}`);
        usuariosRef.on("value", (snapshot) => {
            let conteudos = snapshot.val();
            let conteudosArray = []

            let keys = Object.keys(conteudos["Conteudos"])

            for (let i = 0; i != keys.length; i++){
                conteudosArray[keys[i]] = conteudos["Conteudos"][keys[i]]
            }
            setConteudo(conteudosArray)
            setAssuntos(keys)
        });
    }, []);

    return (
        <div className='disciplina-container'>
            
            <Navbar current={props.current}/>

            <div className='disciplina-col'>
                <Header data={props.user}/>

                <span className='disciplina-title'>{disciplina}</span>

                <div className='assuntos'>
                    {assuntos.map((assunto, index) => {
                        return(
                            <div key={index}>
                                
                                <Assunto nome={assunto} conteudos={conteudo[assunto]} materia={disciplina}/>
                                    
                            </div> 
                        )
                    })}
                </div>

            </div>            

        </div>
    )
}

export default Disciplina

/*
                            <div key={index}>
                                
                                <Assunto nome={assunto} conteudos={data["Conteudos"][assunto]} materia={disciplina}/>
                                
                            </div> 
*/