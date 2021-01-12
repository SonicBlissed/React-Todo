import React from 'react';


class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            formValue: ''
        }
    }

    handleInput = (evt) => {
        this.setState({formValue: evt.target.value})
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.handleAdd(this.state.formValue);
        this.setState({
            formValue: ''
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value = {this.state.formValue} onChange={this.handleInput} type= 'text' name='todo'/>
                <button>Add Your next To-Do Task, Ya Filthy Animal</button>
            </form>
        )
    }
}
export default Form;