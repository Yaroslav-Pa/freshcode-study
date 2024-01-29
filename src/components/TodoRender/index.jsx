import { Component } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';
class TodoRender extends Component {
  render() {
    const {
      data: {
        data,
        isLoading,
        error: { isError, text },
      },
    } = this.props;

    const classes = classNames(styles.todoCard);

    return (
      <>
        {data &&
          data.map(({ id, title, completed }) => (
            <div key={id} className={classes}>
              <h1>{title}</h1>
              <input type="checkbox" name="isCompleted" checked={completed} />
            </div>
          ))}

        {isLoading && <h1>Loading your data...</h1>}
        {isError && <h1>Error: {text}</h1>}
      </>
    );
  }
}

export default TodoRender;
