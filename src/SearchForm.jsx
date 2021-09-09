import { useState } from 'react';
import escapeStringRegexp from 'escape-string-regexp';

const SearchForm = (props) => {
  const { searchTodos } = props;

  const [searchText, setSearchText] = useState('');

  const onChangeSearchtext = (event) => {
    event.stopPropagation();

    const escapedText = escapeStringRegexp(event.target.value);
    setSearchText(escapedText);
  };

  return (
    <>
      <div className='p-searchBox'>
        <i className='fa fa-search p-searchBox__icon' aria-hidden='true'></i>
        <input
          type='text'
          className='p-searchBox__inputText'
          value={searchText}
          placeholder='Search todos'
          onChange={onChangeSearchtext}
          onKeyUp={() => searchTodos(searchText)}
        />
      </div>
    </>
  );
};

export default SearchForm;
