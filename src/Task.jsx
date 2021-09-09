import { useState } from 'react';
import escapeStringRegexp from 'escape-string-regexp';

const Task = (props) => {
  const {
    todos,
    onClickToggleComplete,
    onClickToggleEditMode,
    closeEditMode,
    onClickDeleteTodo,
  } = props;

  // console.log(`Taskコンポーネントに渡ってきたtodos${JSON.stringify(todos)}`);

  const [editText, setEditText] = useState('');

  const onChangeEditTodoText = (event) => {
    event.stopPropagation();
    const escapedText = escapeStringRegexp(event.currentTarget.value);
    setEditText(escapedText);
  };

  const handleKeyUpCloseEdit = (e, index) => {
    console.log(`e:${e}`);
    if (e.which === 13) {
      closeEditMode(index, editText);
    }
  };

  return (
    <>
      {todos.map(function (todo, index) {
        // console.log(todo);
        const todoText = todo.text;
        const input = todo.editMode ? (
          <input
            type='text'
            className='p-listItem__editText'
            value={editText}
            onChange={onChangeEditTodoText}
            onKeyUp={(e) => handleKeyUpCloseEdit(e, index)}
          />
        ) : (
          <span
            className='p-listItem__text js-todo_list-text'
            onClick={() => onClickToggleEditMode(index)}
          >
            {todoText}
          </span>
        );

        return (
          <li
            key={todo.id}
            className={todo.isComplete ? 'p-listItem--done' : 'p-listItem'}
          >
            <i
              className={
                todo.isComplete
                  ? 'c-icon p-listItem__iconTick fas fa-check-circle'
                  : 'c-icon p-listItem__iconTick far fa-check-circle'
              }
              aria-hidden='true'
              onClick={() => onClickToggleComplete(index)}
            ></i>
            {input}
            <i
              className='c-icon p-listItem__iconBin fa fa-trash icon-trash'
              aria-hidden='true'
              onClick={() => onClickDeleteTodo(index)}
            ></i>
          </li>
        );
      })}
    </>
  );
};

export default Task;
