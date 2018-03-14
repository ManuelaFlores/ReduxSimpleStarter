import React,{Component} from 'react';
import { render } from 'react-dom';
import Header from './Header/Header';
import Section from './Section/Section';
import Hobbies from './Hobbies/Hobbies';

const itemF = ['leer','codear','dormir'];
const text = "Soy estudiante de Laboratoria , y en dos semanas y media seré front-end developer junior :)"
const saludo = "soy el header"
const  App = () => ( 
    <div>
    <Header/>
    <Section text={text}/>
    <Hobbies itemF={itemF}/>
    </div>
    
)

export default App

