import React, {Component} from 'react';
import './AddItem.css';
class AddItem extends Component{
    state = {
        name : '',
        age : ''
    }
    change  = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    submit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state)
        console.log(this.state);
        this.setState({
            name : '',
            age  : ''
        })
    }
    render(){
        return(
            <div className='add'>
                <form onSubmit={this.submit}>
                <input type="text" placeholder="Enter Your Name" id="name" onChange={this.change} value={this.state.name} />
                <input type="number" placeholder="Enter Age" id="age" onChange={this.change} value={this.state.age}/>
                <input type="submit" placeholder="Enter Your Name" id="name" value="Add Item"/>
                </form>
            </div>
        )
    }
}
export default AddItem;