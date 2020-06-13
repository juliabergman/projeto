import React, { Component } from 'react'
import './login.css';
import {Link} from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            senha: "",
            erroMensagem : "",
            isLoading : false
        }
    }

    // Atualiza estado genérico, para que seja feito uma só vez.
    atualizaEstado = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    realizarLogin(event){
        event.preventDefault();

        // Limpa o conteúdo do state erroMensagem
        this.setState({ erroMensagem : '' })

        // Define que uma requisição está em andamento
        this.setState({ isLoading : true })

        let usuario = {
            email: this.state.email,
            senha: this.state.senha
        }
        
        if(usuario.email === 'aninhahgatinhah@youtlook.com' && usuario.senha === 'odeiorecalcadas123'){
            this.props.history.push('/home');
        }
        else{
            this.setState({ erroMensagem : 'piiii piii pii OLHA O RECALQUEEEE vc nao eh a ana e eh so uma recakkadah!' })
            this.setState({ isLoading : false })
        }

    }

render(){
    return(
        <div>
           
        <div id="teste">
        <form onSubmit={this.realizarLogin.bind(this)}>         
        <div className="login">
            <label>Email</label>
            <input 
                placeholder="Digite seu email aqui..."
                className="input__login"
                type="text"
                name="email" // Deve ser igual ao nome da variável no state para que o atualizaEstado funcione.
                value={this.state.email}
                onChange={this.atualizaEstado}
                id="login__email"
            />
            <label >Senha</label>
            <input 
                placeholder="Digite sua senha aqui..."
                className="input__login"
                type="password"
                name="senha"
                value={this.state.senha}
                onChange={this.atualizaEstado}
                id="login__password"
            />           
            {/* <Link className="linklogin" to='/home' title="Home da ana">Entrar</Link> */}
            <Link className="linklogin" to='/homevisitante' title="Home do visitante do site">Visitante</Link>
            <p style={{ color : 'red' }}>{this.state.erroMensagem}</p>
            {
                this.state.isLoading === true &&
                <div className="item">
                    <button type="submit" className="btn btn__login" id="btn__login" disabled>Loading...</button>
                </div>
            }
            {
                this.state.isLoading === false &&
                <div className="item"> 
                    <button type="submit" className="btn btn__login" id="btn__login">Login</button>
                </div>
            }
        </div>
       </form>
        </div>
       
        </div>
    );
        

    

}
}
// export default Login;