import React, { useState, useEffect } from 'react';
import Form from './Form';
import Item from './Item';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
      list = JSON.parse(list);
    } else {
      list = [];
    }
    return list;
  };
  const [item, setItem] = useState(getLocalStorage());
  const setLocalStorage = (items) => {
    localStorage.setItem('list', JSON.stringify(items));
  };
  const addItem = (itemName) => {
    const newItem = { name: itemName, completed: false, id: Date.now() };
    setItem([...item, newItem]);
    setLocalStorage([...item, newItem]);
    toast.success('item Added to the list', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const removeItem = (itemId) => {
    // const index = item.findIndex((e) => e.id == itemId);
    // console.log(index);
    // item.splice(index, 1);
    // setItem([...item]);

    const newItems = item.filter((arr) => arr.id != itemId);
    setItem(newItems);
    setLocalStorage(newItems);
    toast.success('item is deleted', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const editItem = (itemId) => {
    const newItems = item.map((arr) => {
      if (arr.id === itemId) {
        const newItem = { ...arr, completed: !arr.completed };
        return newItem;
      }
      return arr;
    });
    setItem(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className="section-center">
      <ToastContainer />
      <Form addItem={addItem} />
      <Item items={item} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}

export default App;
