import Task from './Task';

const TodoList = (props) => {
  const {
    todos,
    onChangeTodoText,
    onClickToggleComplete,
    onClickToggleEditMode,
    onClickDeleteTodo,
  } = props;

  // console.log(`TodoListsに渡ってきたtodosの中身${JSON.stringify(todos)}`);

  return (
    <>
      <ul className='p-todoList js-todo_list'>
        <Task
          todos={todos}
          onChangeTodoText={onChangeTodoText}
          onClickToggleComplete={onClickToggleComplete}
          onClickToggleEditMode={onClickToggleEditMode}
          onClickDeleteTodo={onClickDeleteTodo}
        />
      </ul>
    </>
  );
};

export default TodoList;
