import React from 'react'
import '../styles/login.scss'

import logo from '../assets/logo.png'

function Login(props) {

    function login(){

        // Recebendo as entradas
        let user = document.querySelector("#login-user").value
        let password = document.querySelector("#login-password").value   

        if(user.substring(0, 3) == "HSI"){
            // Acessando o banco de dados
            const usuariosRef = props.base.database().ref("infraestrutura");
            // Buscando conta
            usuariosRef.on("value", (snapshot) => {
                const usuarios = snapshot.val();   
                const data = []
                for(let key in usuarios){
                    console.log(usuarios)
                    if(usuarios[key]["ID"] === user && usuarios[key]["Senha"] === password){
                        data.push(usuarios[key]);
                    } 
                }

                localStorage.setItem("HerbertData", JSON.stringify(data));

                window.location.assign("/Home")    
            });
        } else if(user.substring(0, 4) == ("HS23")){
            // Acessando o banco de dados
            const usuariosRef = props.base.database().ref("usuarios");
            // Buscando conta
            usuariosRef.on("value", (snapshot) => {
                const usuarios = snapshot.val();   
                const data = []
                for(let key in usuarios){
                    console.log(usuarios)
                    if(usuarios[key]["ID"] === user && usuarios[key]["Senha"] === password){
                        data.push(usuarios[key]);
                    } 
                }
                localStorage.setItem("HerbertData", JSON.stringify(data));

                window.location.assign("/Home")    
            });
        }
    }

    return (
        <div className='login-container'>
            
            <div className='login-left'>
                
                <div className='login-header'>
                    <img src={logo} className="login-logo" alt=""/>
                </div>

                <div className='login-content'>
                    <span className='login-title'>Bem Vindo Herbertiano!</span>
                    <span className='login-subtitle'>É um prazer receber você novamente.</span>

                    <div className='input-group'>
                        <label className='input-label'>Usuário</label>
                        <input type="text" className='input-text' placeholder='Ex: HS230001' id="login-user"/>
                    </div>

                    <div className='input-group'>
                        <label className='input-label'>Senha</label>
                        <input type="password" className='input-text' placeholder='Senha' id='login-password'/>
                    </div>

                    <button className='btn-login' onClick={login}>Entrar</button>

                </div>

                <div className='login-footer'>
                    <span className='login-help'>Precisa de alguma ajuda? <a href="www.google.com">Entre em contato!</a></span>
                </div>

            </div>

            <div className='login-right'>

            </div>

        </div>
    )
}

export default Login

/* 
        <div className='login-container'>
            
            <div className='form-login'>

                <span className='form-title'>Login</span>
                
                <div className='form-inputs'>
                    <input placeholder='Username' type="text" className='input' id="login-user"/>
                    <input placeholder='Senha' type="password" className='input' id="login-password"/>
                </div>

                <button className='btn-login' onClick={login}>Acessar</button>

                <span className='login-phrase'>Fase de testes</span>

            </div>

        </div>
*/