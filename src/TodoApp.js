import React from 'react';
import {Todo,TodoList} from './Todo';

export class TodoApp extends React.Component {
	constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div align="center">
        <h1>Add new Todo activity</h1>
		<TodoList todoList={this.state.items} />
		<form onSubmit={this.handleSubmit}>
          <label htmlFor="text">
            Text  
          </label>
          <input
            id="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
		  <br></br>
		  <br></br>
		  <label htmlFor="priority ">
            priority   
          </label>
          <input
            id="priority "
            onChange={this.handleChange}
            value={this.state.text}
          />
		  <br></br>
          <button>
            Add Todo activity
          </button>
        </form>
		
      </div> 
    );
  }
  
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}