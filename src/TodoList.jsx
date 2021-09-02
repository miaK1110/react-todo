import Task from './Task';

const TodoList = (props) => {
  const { todo } = props;
  console.log(JSON.stringify(todo));
  return (
    <>
      <ul class='p-todoList js-todo_list'>
        {todo.map((data, index) => {
          return (
            <Task
              key={index}
              id={data.id}
              name={data.text}
              editMode={data.editMode}
              isComplete={data.isComplete}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
