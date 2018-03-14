import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Hobbies from './components/Hobbies/Hobbies'

render(
<div>
  <Header/>
  <Section/>
  <Hobbies/>
</div>,
  document.getElementById('root')
)
