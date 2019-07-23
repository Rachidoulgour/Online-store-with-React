import React from 'react';
import './register.css';
// import axios from 'axios';
import { thisTypeAnnotation } from '@babel/types';
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            lastname:"",
            email:"",
            password:""
        }
    }
// handleSubmit(event){
//     event.preventDefault();
//     axios.post(`http://localhost:3002/register/`, {})
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
// }
// handleChange=(event)=>{
//     const target = event.target
//     this.setState({
//         [target.name]:target.value
//     })
// }
render(){
    return(
        <div className="register">
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Prenom" onChange={this.handleChange} value={this.state.name}/>
                <input type="text" name="lastname" placeholder="Nom" onChange={this.handleChange} value={this.state.lastname}/>
                <input type="email" name="email" placeholder="ex@exemple.com" onChange={this.handleChange} value={this.state.email}/>
                <input type="text" name="password" placeholder="Mot de passe" onChange={this.handleChange} value={this.state.passeord}/>
                <input type="text" name="password2" placeholder="Confirmez mot de passe" onChange={this.handleChange} value={this.state.password2}/>
                <button className="register-btn" type="submit">Creer un compte</button>
            </form>
        </div>
    )
    }
}

export default Register;