import React,{Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

class Admin extends Component{
    constructor(props){
        super(props);
        const token = localStorage.getItem("token")

        let loggedIn = true

        if(token == null){
            loggedIn=false
        }
        this.state = {
            loggedIn
        }
      
    }
    render(){
        if(this.state.loggedIn==false){
            return   <Redirect to="/" />
        }
        return(
            <div>
                <h1 className="text-muted display-4">Welcom to Admin Page</h1>
                
                 <button className="bg-primary btn m-4"> <Link to="/logout" className="text-white">Logout</Link></button> 
            </div>
        )
    }
}
export default Admin;