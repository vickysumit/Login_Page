import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Logout extends Component{
    constructor(props){
        super(props)

        localStorage.removeItem("token");
    }
    render(){
        return(
            <div>
                <h1 className="text-muted display-4">You have been logged out</h1>
                <button className="bg-primary btn m-4"> <Link to="/" className="text-white">Login Again?</Link></button> 
            </div>
        )
    }
}
export default Logout;