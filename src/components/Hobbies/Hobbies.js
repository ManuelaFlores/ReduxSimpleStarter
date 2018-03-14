import React,{Component} from 'react';

const Hobbies = ({itemF})=>(    
    <ul>
        { 
    itemF.map((element,index)=>{ return <li key={index}>{element}</li>})
        }
    </ul>
        
)

export default Hobbies;