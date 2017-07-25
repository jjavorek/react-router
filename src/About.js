import React, {Component} from 'react';
import {Link} from 'react-router';

class About extends Component{
    render(){
        return (
            <div>

                <nav>
                    <Link to="/home"> HOME </Link>
                    <Link to="/about"> ABOUT </Link>
                </nav>

                <h1>This is the About PAGE</h1>
            </div>
        )
    }
}

export default About;