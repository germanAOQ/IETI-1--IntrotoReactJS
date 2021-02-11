import React from 'react';
import {Todo,TodoList} from './Todo';

const lista = [];

export class TodoApp extends React.Component {

	
	constructor(props) {
    super(props);
    this.state = { items: [], text: '' , priority: 0};
    //this.handleChange = this.handleChange.bind(this);
	this.handleChangeText = this.handleChangeText.bind(this);
	this.handleChangePriority = this.handleChangePriority.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	  	const todos = [{text:"Learn React", priority:5, dueDate: new Date() }, {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },    {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }];
    return (
      <div align="center">
        <h1>Add new Todo activity</h1>	
		<form onSubmit={this.handleSubmit}>
          <label htmlFor="text">
            Text  
          </label>
          <input
            id="text"
			onChange={this.handleChangeText}
            value={this.state.text}
          />
		  <br></br>
		  <br></br>
		  <label htmlFor="priority ">
            Priority                     
          </label>
          <input
            id="priority"
			onChange={this.handleChangePriority}
			value = {this.state.value}
          />
		  <br></br>
          <input type="submit" value="Submit" />
        </form>
		<TodoList todoList={this.state.items} />
      </div> 
    );
  }
  
  /**
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  */
  
  handleChangeText(e){
	  this.setState({ text: e.target.value });
  }
  
  handleChangePriority(e){
	  this.setState({ priority: e.target.value})
  }

  handleSubmit(e) {
	  lista.push({text: this.state.text, priority: this.state.priority, dueDate: new Date()});
	  /**
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
	*/
	this.setState({ items: lista });
	alert('A TODO element was submitted: ');
    e.preventDefault();
  }
}