import React, { Component } from 'react'
import styles from './TodoInput.module.scss';

export class TodoList extends Component {
  render() {
    const {id, title, doneTodo} = this.props; 
    return (
      <div className={styles.item}>
        <span>{title}</span>
        <button className={styles.done} onClick={() => doneTodo(id)}>Done</button></div>
    )
  }
}

export default TodoList