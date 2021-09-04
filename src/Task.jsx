const Task = (props) => {
  const {
    todos,
    onChangeTodoText,
    onClickToggleComplete,
    onClickToggleEditMode,
    onClickDeleteTodo,
  } = props;

  // console.log(`Taskコンポーネントに渡ってきたtodos${JSON.stringify(todos)}`);

  return (
    <>
      {todos.map(function (todo, index) {
        console.log(todo);
        const todoText = todo.text;
        const input = todo.editMode ? (
          <input
            type='text'
            className='p-listItem__editText js-todo_list-editForm'
            value={todoText}
            onChange={() => onChangeTodoText(index)}
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
          <li key={index} className='p-listItem js-todo_list-item'>
            <i
              className={
                todo.isComplete
                  ? 'c-icon p-listItem__iconTick fas fa-check-circle'
                  : 'c-icon p-listItem__iconTick far fa-check-circle'
              }
              aria-hidden='true'
              onClick={onClickToggleComplete}
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
