import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error('kindly enter the word', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    addItem(newItem);
    setNewItem('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};
export default Form;
