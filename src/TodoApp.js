import './style.scss';
import Header from './Header';
import AddTodoForm from './AddTodoForm';
import SearchForm from './SearchForm';
import TodoList from './TodoList';
import { useState } from 'react';
import uniqid from 'uniqid';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: uniqid(),
      text: 'Click todo to edit',
      editMode: false,
      isComplete: false,
    },
    {
      id: uniqid(),
      text: 'Tick the todo to set to done',
      editMode: false,
      isComplete: false,
    },
    {
      id: uniqid(),
      text: 'Click bin to delete todo',
      editMode: false,
      isComplete: false,
    },
  ]);

  const [searchText, setSearchText] = useState('');

  const handleReload = (event) => {
    event.preventDefault();
  };

  const onClickAddTodo = (event, text) => {
    // console.log(`入力された値：${text}`);
    handleReload(event);

    const newTodoItem = {
      id: uniqid(),
      text: text,
      editMode: false,
      isComplete: false,
    };

    const newTodo = [...todos, newTodoItem];

    // alert(`新しいtodoの中身${JSON.stringify(newTodo)}`);
    setTodos(newTodo);
  };

  const searchTodos = (searchText) => {
    setSearchText(searchText);
  };

  const filterCollection = (elm) => {
    const regexp = new RegExp('^' + searchText, 'i');
    return elm.text.match(regexp);
  };

  const filteredList = searchText ? todos.filter(filterCollection) : todos;

  const onClickToggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => ({
      ...todo,
      isComplete: i === index ? !todo.isComplete : todo.isComplete,
    }));
    setTodos(newTodos);
  };

  const onClickToggleEditMode = (index) => {
    const newTodos = todos.map((todo, i) => ({
      ...todo,
      editMode: i === index ? !todo.editMode : todo.editMode,
    }));
    setTodos(newTodos);
  };

  const onClickDeleteTodo = (index) => {
    console.log(JSON.stringify(index));
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const closeEditMode = (index, editText) => {
    // console.log(`editTextの中身：${editText}`);
    // console.log(`indexの中身：${index}`);
    const newTodos = todos.map((todo, i) => ({
      ...todo,
      text: i === index ? editText : todo.text,
      editMode: i === index ? !todo.editMode : todo.editMode,
    }));
    setTodos(newTodos);
  };

  return (
    <div className='l-main App'>
      <Header />
      <AddTodoForm onClickAddTodo={onClickAddTodo} />
      <SearchForm todos={filteredList} searchTodos={searchTodos} />
      <TodoList
        todos={filteredList}
        onClickToggleComplete={onClickToggleComplete}
        onClickToggleEditMode={onClickToggleEditMode}
        closeEditMode={closeEditMode}
        onClickDeleteTodo={onClickDeleteTodo}
      />
    </div>
  );
};

export default TodoApp;
