import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
		console.log(this.props)
		//console.log(this.props.priority)
		//console.log(this.props.dueDate)
        return ( 
		<div>
          <h2>{this.props.text}</h2> 
		  <h2>{this.props.priority}</h2> 
		  <h2>{this.props.dueDate}</h2> 
		 </div>
        );
    }

}

export class TodoList extends React.Component{
	
	render(){
		const list = this.props.todoList;
		console.log(list);
		const dynamicList = list.map((elemento) =>
			<Todo text={elemento.text} priority={elemento.priority} dueDate={elemento.dueDate.toString()}/>
			);
		return dynamicList;
	}
}