import React, { Component } from 'react'
import styles from  './TodoInput.module.scss';

export class TodoDoneList extends Component {
  render() {
    const {id, title, deleteTodo} = this.props;
    return (
        <div className={styles.item}>
            <span>{title}</span>
            <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    )
  }
}

export default TodoDoneList