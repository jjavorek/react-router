import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component{

    render(){
        console.log(this.props.children)
        var children = this.props.children
        return (
            <div>
                <nav>
                    <Link to="/home"> HOME </Link>
                    <Link to="/about"> ABOUT </Link>
                </nav>
                
                <h1>This is the HOME PAGE</h1>
            </div>
        )
    }
}

export default Home;