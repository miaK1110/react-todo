import Header from './Header';
import AddTodoForm from './AddTodoForm';
import SearchForm from './SearchForm';
import TodoList from './TodoList';
import { useState } from 'react';

const TodoApp = () => {
  const [todo, setTodo] = useState(
    {
      id: '',
      text: 'Click todo to edit',
      editMode: false,
      isComplete: false,
    },
    {
      id: '',
      text: 'Tick the todo to set to done',
      editMode: false,
      isComplete: false,
    },
    {
      id: '',
      text: 'Click bin to delete todo',
      editMode: false,
      isComplete: false,
    }
  );
  return (
    <div className='l-main App'>
      <Header />
      <AddTodoForm />
      <SearchForm />
      <TodoList todo={todo} />
    </div>
  );
};

export default TodoApp;
