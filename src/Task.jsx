const Task = (props) => {
  const { todo } = props;
  return (
    <>
      <li
        class='p-listItem js-todo_list-item'
        data-text='click tasks to swicth edit mode'
      >
        <i
          class='c-icon p-listItem__iconTick far fa-check-circle js-click-done'
          aria-hidden='true'
        ></i>
        <span class='p-listItem__text js-todo_list-text'>
          Click todo to edit
        </span>
        <input
          type='text'
          class='p-listItem__editText js-todo_list-editForm'
          value='click tasks to swicth edit mode'
        />
        <i
          class='c-icon p-listItem__iconBin fa fa-trash icon-trash js-click-delete'
          aria-hidden='true'
        ></i>
      </li>
    </>
  );
};

export default Task;
