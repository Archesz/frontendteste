import React from 'react'
import './DisciplinaIcon.scss'

function DisciplinaIcon(props) {
    return (
        <div className={`disciplina ${props.color}`}>
            {props.icon}
            <span>{props.materia}</span>
        </div>
    )
}

export default DisciplinaIcon