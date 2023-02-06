import React from "react";
import TodosLists from "./TodosList";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: "Finish Dishes",
          completed: true,
        },
        {
          id: uuidv4(),
          title: "clean floors",
          completed: false,
        },
        {
          id: uuidv4(),
          title: "Finish math homework",
          completed: false,
        },
      ],
    };
  }
  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id
        })
      ]
    })
  };

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div>
        <h1>To do list</h1>
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosLists
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}
export default TodoContainer;
