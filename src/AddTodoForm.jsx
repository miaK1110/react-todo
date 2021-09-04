import { useState } from 'react';

const AddTodoForm = (props) => {
  const { onClickAddTodo } = props;

  const [text, setText] = useState('');
  const [errShowFlag, setErrShowFlag] = useState(false);

  const onChangeTodoText = (event) => {
    event.stopPropagation();
    setText(event.target.value);
  };

  const handleAddTodo = (event) => {
    if (text === '') {
      event.preventDefault();
      setErrShowFlag(true);
      return;
    }
    setErrShowFlag(false);
    onClickAddTodo(event, text);
    setText('');
  };

  return (
    <>
      <form className='p-addTodo' id='js-form'>
        <div className='p-addTodo__inputArea'>
          <input
            type='text'
            className='p-addTodo__inputText'
            value={text}
            placeholder='...'
            onChange={onChangeTodoText}
          />
          {errShowFlag && (
            <span className='c-error'>You need to put something</span>
          )}
        </div>
        <button className='c-btn p-addTodo__btn' onClick={handleAddTodo}>
          Add Todo
        </button>
      </form>
    </>
  );
};

export default AddTodoForm;
