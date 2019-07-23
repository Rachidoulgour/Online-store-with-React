import React from 'react';
import './login.css';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
render(){
    return(
        <div className="register">
            <form>
                <input input type="email" name="email" placeholder="ex@exemple.com" onChange={this.handleChange} value={this.state.email}/>
                <input type="text" name="password" placeholder="Mot de passe" onChange={this.handleChange} value={this.state.passeord}/>
                <button className="entrer-btn">Se connecter</button>
            </form>
        </div>
    )
}
}
export default Login;