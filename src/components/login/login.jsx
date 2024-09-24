import React from 'react'
import { FaUser,FaLock}  from 'react-icons/fa'; //importando biblioteca icons
import { useState } from 'react'; //como se fosse salvar os dados em variaveis
import "./login.css"; //importando estilo


const Login = () => {

    //declarando variavel (a primeira vai ler e a segunda vai alterar)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //criando função para envio de formulario
    const handleSubmit = (event) => {
        event.preventDefault();
       
        alert("Enviando os dados" + username + "-" + password)
    }
    
    return (
    <div className='container'> 

      <form onSubmit={handleSubmit}>
            <h1>Acesse o Sistema</h1>
        <div className='input-field'>
            <input type="email" placeholder='Digite seu E-mail'
            onChange={(e) => setUsername(e.target.value)} />
            <FaUser className='icon' />
        </div>
        <div className='input-field'>
            <input type="password" placeholder='Digite sua Senha' 
            onChange={(e) => setPassword(e.target.value)}/>
            <FaLock className='icon' />
        </div>
        
        <div className='recall-forget'> 
            <label>
                <input type="checkbox" />
                Lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
        </div>
    
                <button>Entrar</button>

        <div className='signup-link'>
            <p>Ainda não possui uma conta? <a href="#">Registrar</a></p>
        </div>

      </form>

    </div>
  )
}

export default Login
