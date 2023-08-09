import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './TodoInput';
import TodoList from './TodoList'
import TodoDoneList from './TodoDoneList'

import styles from './TodoInput.module.scss';
import { toast } from 'react-toastify';

export class TodoRow extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem('todos')) || [
      {
        id: 0,
        title: 'play tennis',
        done: false,
      },
      {
        id: 1,
        title: 'play football',
        done: false,
      },
      {
        id: 2,
        title: 'play game',
        done: true,
      },
    ],
  };
  render() {
    let todos = [];
    const saveTodos = () => {
      this.setState({todos})
      localStorage.setItem('todos', JSON.stringify(todos))
    }
    const unDone = this.state.todos.filter((todo) => !todo.done);
    const Done = this.state.todos.filter((todo) => todo.done)
    
    const getValue = (value) => {
      todos = [
        ...this.state.todos, {id: uuidv4(), title: value, done: false},
      ];
      if (value !== '') {
        saveTodos();
        toast.success('Saved successfully !', {autoClose: 1000})
      }else {
        toast.error('Please write the task before you save')
      }
    }

    const doneTodo = (id) => {
      todos = this.state.todos.map((todo) => {
        todo.id === id && (todo.done = true);
        return todo;
      })
      saveTodos();
    }

    const deleteTodo = (id) => {
      todos = this.state.todos.filter((todo) => todo.id !== id)
      saveTodos();
    }

    return (
      <div className="container">
        <TodoInput getValue={getValue}/>
        <div className={styles.row}>
          <section>
          {unDone.map((todo) => 
            <TodoList doneTodo={doneTodo} key={todo.id} {...todo}/>
          )}
          </section>
          <section>
          {Done.map((todo) => 
            <TodoDoneList deleteTodo={deleteTodo} key={todo.id} {...todo}/>
          )}
          </section>
        </div>
      </div>
    )
  }
}

export default TodoRow