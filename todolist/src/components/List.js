import React from 'react';

const list = ['shopping', 'gym', 'call Jhon'];

const List = () => {
  return (
    <div>
      {list.map((item) => {
        return (
          <div key={item}>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
