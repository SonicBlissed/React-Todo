import React from 'react';
import List from './components/List';
import Form from './components/Form';
import Todo from './components/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: [
        {
          task: 'Color Bananas',
          id: 1,
          completed: false,
        },
        {
          task: 'Seduce Some Pancakes',
          id: 2,
          completed: false,
        }
      ]
    }
  }

  handleAdd = (listName) => {
    console.log(listName);
    const toDo = {
      task: listName,
      id: Date.now(),
      completed: false
    };
    const newToDo = [
      ...this.state.list,
      toDo
    ];

    this.setState({
      list: newToDo
    });
  }

  render() {
    
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Form handleAdd = {this.handleAdd}/>
        <List list = {this.state.list} />
      </div>
    );
  }
}

export default App;
