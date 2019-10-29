import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        // prevent default of form being submitted 
        e.preventDefault();
        //submit todo to output DOM
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    // render jsx template
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo