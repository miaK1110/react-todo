const Header = () => {
  return (
    <>
      <header className='l-header'>
        <div className='p-header'>
          <h1 className='p-header__title'>React TODO</h1>
          <span className='p-header__emoji'> &#129412;</span>
        </div>
        <ul className='c-tag'>
          <a
            href='http://vuetodo.s3-website-ap-northeast-1.amazonaws.com/'
            className='c-tag__wrapper'
          >
            <li className='c-tag__item'>Vue.js ver</li>
          </a>
          <a
            href='http://jquerytodo.s3-website-ap-northeast-1.amazonaws.com/'
            className='c-tag__wrapper'
          >
            <li className='c-tag__item'>jQuery ver</li>
          </a>
          <a
            href='http://backbonetodo.s3-website-ap-northeast-1.amazonaws.com/'
            className='c-tag__wrapper'
          >
            <li className='c-tag__item'>Backbone.js ver</li>
          </a>
        </ul>
      </header>
    </>
  );
};

export default Header;
