import React, { useState } from 'react';

const Admin = () => {

    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

 
    const addItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };


    const deleteItem = index => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

 
    const editItem = (index, newValue) => {
        const updatedItems = [...items];
        updatedItems[index] = newValue;
        setItems(updatedItems);
    };


    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    return (
        <div className="admin-container">
            <h1>Admin page</h1>

       
            <div className="form-container">
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                    placeholder="Enter new item" 
                    className="input-field"
                />
                <button onClick={addItem} className="add-button">Add Item</button>
            </div>

       
            <ul className="item-list">
                {items.map((item, index) => (
                    <li key={index} className="list-item">
                       
                        <span>{item}</span>

                      
                        <button onClick={() => editItem(index, prompt("Enter new value:"))} className="edit-button">
                            Edit
                        </button>

                   
                        <button onClick={() => deleteItem(index)} className="delete-button">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;
