const AddTodoForm = () => {
  return (
    <>
      <form class='p-addTodo' id='js-form'>
        <div class='p-addTodo__inputArea'>
          <input
            type='text'
            class='p-addTodo__inputText js-get-val'
            value=''
            placeholder='...'
          />
          <span class='c-error js-toggle-error'>You need to put something</span>
        </div>
        <button class='c-btn p-addTodo__btn js-add-todo'>Add Todo</button>
      </form>
    </>
  );
};

export default AddTodoForm;
