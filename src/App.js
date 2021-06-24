import React, {Component} from 'react';
import './App.css';
import TodoItems from './component/TodoItems/TodoItems';
import AddItem from './component/AddItem/AddItem';
class App extends Component {
  state = {
    items : [
      {id:1 , name : "Mohamed", age : 22},
      {id:2 , name : "Bassem", age : 20},
      {id:3 , name : "Dawood", age : 24},
      {id:4 , name : "Gehad", age : 21}

    ]
  }
  handleDelete = (id) => {
 // Frist Method 
    let items = this.state.items;
    let i = items.findIndex(item => item === item.id)
    items.splice(i,1)
    this.setState({
      items
    })
  
    // Second Method
   // let items = this.state.items.filter(item => {
    //  return item.id !== id
   // })
   // this.setState({items})
  };
  handleAdd = (item) => {
    item.id = Math.ceil(Math.random()*10);
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }
  render(){
    return (
      <div className="App container">
       <h1 className="text">Todo List</h1>
        <TodoItems  items={this.state.items} handleDelete={this.handleDelete}/>
        <AddItem addItem={this.handleAdd}/>
      </div>
    )  
  }
}

export default App;
