import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import styles from './style.module.scss';
const startTodos = [
  {
    id: 1,
    task: 'Buy groceries',
    completed: false,
  },
  {
    id: 2,
    task: 'Finish coding assignment',
    completed: true,
  },
  {
    id: 3,
    task: 'Go for a run',
    completed: false,
  },
  {
    id: 4,
    task: 'Read a book',
    completed: false,
  },
  {
    id: 5,
    task: 'Prepare for the meeting',
    completed: true,
  },
];

const useToDos = (initialTodos) => {
  const [todosArr, setTodosArr] = useState([...initialTodos]);

  const createTodo = ({ task }) => {
    const taskToAdd = {
      id: Math.random(),
      task,
      completed: false,
    };
    setTodosArr((oldTodos) => [...oldTodos, taskToAdd]);
  };

  const setCompleted = (findId, value) => {
    todosArr.find(({ id }) => findId === id).completed = value;
    setTodosArr((oldTask) => [...oldTask]);
    // setTodosArr((oldTask) =>
    //   oldTask.map((task) => {
    //     if (task.id === findId) {
    //       task.completed = value;
    //     }
    //     return task;
    //   })
    // );
  };

  const deleteTask = (id) => {
    const newArr = todosArr.filter((task) => task.id !== id);
    setTodosArr(newArr);
  };

  return [todosArr, createTodo, setCompleted, deleteTask];
};

function Todos() {
  const [todos, createTask, updateTask, deleteTask] = useToDos(startTodos);

  const validation = Yup.object({
    task: Yup.string()
      .min(1, 'Must be 1 character or more')
      .max(30, 'Must be 30 characters or less')
      .required('Required'),
  });

  return (
    <section>
      <Formik
        initialValues={{ task: '' }}
        validationSchema={validation}
        onSubmit={createTask}
      >
        <Form className="flex gap-3 m-3 items-center">
          <Field type="text" name="task" />
          <ErrorMessage name="task" component="div" className="text-red-400" />
          <button type="submit">Create</button>
        </Form>
      </Formik>
      <div className="flex flex-col gap-3">
        {todos.map(({ id, task, completed }) => (
          <section
            key={id}
            className={styles.toDoBlock + (completed ? ' bg-green-100' : '')}
          >
            <input
              type="checkbox"
              name="isCompleted"
              checked={completed}
              onChange={(e) => {
                updateTask(id, e.target.checked);
              }}
            />
            <h1>{task}</h1>
            <button
              onClick={() => {
                deleteTask(id);
              }}
            >
              Delete
            </button>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Todos;
