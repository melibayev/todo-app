import React, { Component, createRef, Fragment } from 'react'
import styles from './TodoInput.module.scss';

export class TodoInput extends Component {
  inputRef = createRef();
  render() {
    const submit = (e) => {
      e.preventDefault();
      this.props.getValue(this.inputRef.current.value);
      this.inputRef.current.value = ''
    }
    return (
    <Fragment>
    <div className="container">
        <div className={styles.title}>
            <h2>Todo list:</h2>
        </div>
        <form className={styles.form} onSubmit={submit}>
            <input type="text" placeholder='Write the task...' ref={this.inputRef} />
            <button type='submit'>Save</button>
        </form>
    </div>
    </Fragment>
    )
  }
}

export default TodoInput