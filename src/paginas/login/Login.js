import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';


function Login(){
    return(
        <div>
           
        <div id="teste">         
        <div className="login">
            <label>Email</label>
            <input placeholder="Digite seu email aqui..."/>
            <label >Senha</label>
            <input placeholder="Digite sua senha aqui..."/>           
            <Link className="linklogin" to='/quemsomos' title="Home da ana">Entrar</Link>
            <Link className="linklogin" to='/quemsomosvisitante' title="Home do visitante do site">Visitante</Link>
           
        </div>
       
        </div>
       
        </div>
    );
        

    

}

export default Login;