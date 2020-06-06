import React from 'react';
import './login.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function Login(){
    return(
        <div>
            <Header/>
        <div id="teste">         
        <div className="login">
            <label>Email</label>
            <input placeholder="Digite seu email aqui..."/>
            <label>Senha</label>
            <input placeholder="Digite sua senha aqui..."/>           
            <button>Entrar</button>
            <button>Visitante</button>
           
        </div>
       
        </div>
        <Footer/>
        </div>
    );
        

    

}

export default Login;