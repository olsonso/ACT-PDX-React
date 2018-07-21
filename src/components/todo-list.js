import React, { Component } from 'react';
import TodoListItems from './todo-list-items';

class TodoList extends Component {

  constructor(props) {
  super(props);

  this.state = {
    items: []
  };

  this.addItem = this.addItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);

}

addItem(item) {
  if (this.inputElement.value !== "") {
    const newItem = {
      text: this.inputElement.value,
      key: Date.now()
    };

    this.setState((prevState) => {
     return {
       items: prevState.items.concat(newItem)
     };
   });

   this.inputElement.value = "";
 }

 item.preventDefault();
}

deleteItem(key){
 var filteredItems = this.state.items.filter(function(item) {
   return (item.key !==key);
 });
 this.setState({
   items:filteredItems
 });
}
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
        <form onSubmit={this.addItem}>
        <input ref={(a) => this.inputElement = a} placeholder="enter item" >
        </input>
        <button type='submit'> add</button>
      </form>
    </div>
      <TodoListItems entries={this.state.items}
                delete={this.deleteItem}/>
      </div>
    );
  }
}

export default TodoList;
