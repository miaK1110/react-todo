const SearchForm = () => {
  return (
    <>
      <div class='p-searchBox'>
        <i class='fa fa-search p-searchBox__icon' aria-hidden='true'></i>
        <input
          type='text'
          class='p-searchBox__inputText js-search'
          value=''
          placeholder='Search todos'
        />
      </div>
    </>
  );
};

export default SearchForm;
