import Task from './Task';

const TodoList = (props) => {
  const {
    todos,
    onChangeTodoText,
    onClickToggleComplete,
    onClickToggleEditMode,
    closeEditMode,
    onClickDeleteTodo,
  } = props;

  // console.log(`TodoListsに渡ってきたtodosの中身${JSON.stringify(todos)}`);

  return (
    <>
      <ul className='p-todoList'>
        <Task
          todos={todos}
          onChangeTodoText={onChangeTodoText}
          onClickToggleComplete={onClickToggleComplete}
          onClickToggleEditMode={onClickToggleEditMode}
          closeEditMode={closeEditMode}
          onClickDeleteTodo={onClickDeleteTodo}
        />
      </ul>
    </>
  );
};

export default TodoList;
