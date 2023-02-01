import React from "react";
import TodosLists from "./TodosList";

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: [
          {
            id: 1,
            title: "Finish Dishes",
            completed: true,
          },
          {
            id: 2,
            title: "clean floors",
            completed: false,
          },
          {
            id: 3,
            title: "Finish math homework",
            completed: false,
          },
        ],
      };
  }
  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
  };

  render() {
    return (
      <div>
        <h1>To do list</h1>
        <TodosLists todos={this.state.todos} handleChangeProps={this.handleChange} />
      </div>
    );
  }
}
export default TodoContainer;
