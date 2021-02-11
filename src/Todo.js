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