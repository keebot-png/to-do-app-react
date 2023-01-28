import React from "react";
import TodosLists from "./TodosList";
TodosLists
class TodoContainer extends React.Component {
  constructor(props) {
    super(props),
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
  render() {
    return (
      <div>
        <h1>To do list</h1>
        <TodosLists todos={this.state.todos}/>
      </div>
    );
  }
}
export default TodoContainer;
