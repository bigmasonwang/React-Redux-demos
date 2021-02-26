import React from 'react';
import { list } from '../db';

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
