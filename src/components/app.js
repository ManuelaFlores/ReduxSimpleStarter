import React,{Component} from 'react';
import { render } from 'react-dom';
import Header from './Header/Header';
import Section from './Section/Section';
import Hobbies from './Hobbies/Hobbies';

class App extends Component {
  render() {
    return ( 
    <div>
    <Header/>
    <Section />
    <Hobbies items={['leer','codear','dormir']}/>
    </div>
    )
  }
}

export default App

