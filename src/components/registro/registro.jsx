import React from "react";
import "./registro.css";
import firebase from "../firebase/config";

export default class Registro extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          displayName: '',
          email: '', 
          password: '',
          disabled: false
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    
    registerUser = () => {
        if(this.state.email === '' && this.state.password === '') {
            alert('Enter details to signup!')
        } else {
            this.setState({
                disabled: true,
        })
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                res.user.updateProfile({
                displayName: this.state.displayName
                })
                console.log('User registered successfully!')
                this.setState({
                disabled: false,
                displayName: '',
                email: '', 
                password: ''
                })
                this.props.navigation.navigate('/')
            })
            .catch(error => this.setState({ errorMessage: error.message }))      
        }
    }

    render () {
        return(
            <div className="reg"> 
                <div className="newReg">   
                    <h3>¡NUEVO ENTRENADOR!</h3>             
                    <input type="text" placeholder="nombre" value={this.state.displayName} onChangeText={(val) => this.updateInputVal(val, 'displayName')}></input>
                    <input type="email" placeholder="correo" value={this.state.email} onChangeText={(val) => this.updateInputVal(val, 'email')}></input>
                    <input type="password" placeholder="contraseña" value={this.state.password} onChangeText={(val) => this.updateInputVal(val, 'password')}></input>
                    <button className="userReg" onClick={() => this.registerUser()}>REGISTRARSE</button>
                    <h6>_______________  O registrarse con  _______________</h6>
                    <div className="social">
                        <button className="facebook" onClick=""></button>
                        <button className="google" onClick=""></button>                     
                    </div>
                    <h6 onClick="">INGRESAR</h6>              
                </div> 
                <div className="pikachu"></div>
            </div>
        );
    }
}


    
