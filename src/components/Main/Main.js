import React, { useContext } from 'react';
import { ItemsContext } from '../../context/ItemsContext.js';
import './Main.css';

export default function Main() {

  const { items } = useContext(ItemsContext);

  // console.log('items', items);

  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>{item.description}</p>
      ))}
    </div>
  );
}
