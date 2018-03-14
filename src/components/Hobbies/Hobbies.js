import React,{Component} from 'react';

class Hobbies extends Component {
    render(){
        const {items}= this.props;
        const itemF = this.props.items.map((element,index)=>{ return <li key={index}>{element}</li>})
        
        return (
            <div>
                <ul>
                  {itemF}
                </ul>
            </div>
        )
    }
}

export default Hobbies;