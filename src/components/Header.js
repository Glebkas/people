function Header(props) {
  const handleAddClick = () => {
    props.onaddProfileClick();
  };
  return (
    <header className="header">
      <div className="header__logo"></div>
      <button
        className="header__add-button"
        onClick={handleAddClick}
        type="button"
      ></button>
    </header>
  );
}

export default Header;
