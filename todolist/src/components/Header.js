import React from 'react';

const handleClick = (e) => {
  e.preventDefault();
};

const Header = () => {
  return (
    <div>
      <h1>My To Do List</h1>
      <form>
        <input type='text' name='newitem' />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default Header;
