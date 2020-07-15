import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import '../style.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
class Login extends Component{
    constructor(props){
        super(props);
        const token = localStorage.getItem("token")

        let loggedIn = true

        if(token == null){
            loggedIn=false
        }
        this.state={
            username:'',
            password:'',
            loggedIn
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    submitForm(e){
        e.preventDefault()
        const {username,password} = this.state
        if(username === "admin" && password === "admin"){
            localStorage.setItem("token","slfksjfksjfsdkf")
            this.setState({
                loggedIn:true
            })
        }
        else{
            alert("Wrong username or password please try again")
            this.setState({
                username:'',
                password:''
    
            })
        }
    }
    render(){
        if(this.state.loggedIn){
            return <Redirect to="/admin" />
        }
      
        return(
            <div>
                
                <Card className="card bg-secondary">
                    <CardBody>                      
                        <form className="form" onSubmit={this.submitForm}>                    
                            <table className="m-4">
                                <tr>
                                <CardTitle><h1>Login <i className="fas fa-sign-in-alt"></i></h1></CardTitle>
                                </tr>
                                <tr>
                                    <td>
                                    <p><b>Username</b></p>
                                    </td>
                                    <td>
                                    <input type="text" placeholder="Username" name="username" value={this.state.username}
                                    onChange={this.onChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <p><b>Password</b></p>
                                    </td>
                                    <td>
                                    <input type="text" placeholder="Password" name="password" value={this.state.password}
                                    onChange={this.onChange} />  
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td>
                                    <input className="bg-primary btn text-white" type="submit" value="Submit"/>
                                    </td>
                                </tr>
                                
                            </table>   
                            
                                        
                           
                        </form>
                    </CardBody>
                </Card>
                
            </div>
            
        );
    }
}

export default Login;