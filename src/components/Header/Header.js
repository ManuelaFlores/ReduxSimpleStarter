import React,{Component} from 'react';
import './Header.css'

class Header extends Component {
    render(){
        return (
            <div>
                <ul className="">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

export default Header;
