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
			<tr>
				<td>{this.props.text}</td> 
				<td>{this.props.priority}</td> 
				<td>{this.props.dueDate}</td>
			</tr>
        );
    }

}

export class TodoList extends React.Component{
	
	render(){
		console.log("Entro a TodoList");
		const list = this.props.todoList;
		console.log(list);
		const dynamicList = list.map((elemento) =>
			<Todo text={elemento.text} priority={elemento.priority} dueDate={elemento.dueDate.toString()}/>
			);
		return (
			<div>
				<br></br>
				<table>
				<tr>
					<th>Text</th>
					<th>Priority</th>
					<th>Date</th>
				</tr>
					{dynamicList}
				</table>
			</div>
		);
	}
}