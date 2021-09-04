import Header from './Header';
import AddTodoForm from './AddTodoForm';
import SearchForm from './SearchForm';
import TodoList from './TodoList';
import { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Click todo to edit',
      editMode: false,
      isComplete: false,
    },
    {
      text: 'Tick the todo to set to done',
      editMode: false,
      isComplete: false,
    },
    {
      text: 'Click bin to delete todo',
      editMode: false,
      isComplete: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onClickAddTodo = (event, text) => {
    // console.log(`入力された値：${text}`);
    handleSubmit(event);

    const newTodoItem = {
      text: text,
      editMode: false,
      isComplete: false,
    };

    const newTodo = [...todos, newTodoItem];

    // alert(`新しいtodoの中身${JSON.stringify(newTodo)}`);
    setTodos(newTodo);
  };

  const onClickToggleComplete = (event) => {
    alert(event);
    handleSubmit(event);
    setTodos({ isComplete: true });
  };

  const onClickToggleEditMode = (index) => {
    setTodos({ editMode: true });
  };

  const onClickDeleteTodo = (index) => {
    console.log(JSON.stringify(index));
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div className='l-main App'>
      <Header />
      <AddTodoForm onClickAddTodo={onClickAddTodo} />
      <SearchForm todos={todos} />
      <TodoList
        todos={todos}
        onClickToggleComplete={onClickToggleComplete}
        onClickToggleEditMode={onClickToggleEditMode}
        onClickDeleteTodo={onClickDeleteTodo}
      />
    </div>
  );
};

export default TodoApp;
