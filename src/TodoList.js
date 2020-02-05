import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./todo";
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  addTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  update(id, updateTask) {
    const updateTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updateTask };
      }
      return todo;
    });
    this.setState({
      todos: updateTodos
    })
  }

  toggleCompletion(id) {
    const updateTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({
      todos: updateTodos
    })
  }
  render() {
    const todos = this.state.todos.map(item => (
      <Todo
        key={item.id}
        remove={() => this.remove(item.id)}
        task={item.task}
        completed={item.completed}
        id={item.id}
        update={this.update}
        toggleTodo={this.toggleCompletion}
      />
    ));
    return (
      <div className="TodoList">
        <h1>Todo List! <span>A Simple React Todo List App.</span></h1>
        <ul>{todos}</ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
