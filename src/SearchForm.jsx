import { useState } from 'react';

const SearchForm = (props) => {
  const { todos } = props;

  const [searchText, setSearchText] = useState('');

  const onChangeSearchtext = (event) => {
    event.stopPropagation();
    setSearchText(event.target.value);
  };
  return (
    <>
      <div className='p-searchBox'>
        <i className='fa fa-search p-searchBox__icon' aria-hidden='true'></i>
        <input
          type='text'
          className='p-searchBox__inputText js-search'
          value={searchText}
          placeholder='Search todos'
          onChange={onChangeSearchtext}
        />
      </div>
    </>
  );
};

export default SearchForm;
