import React from 'react';

const ProductList = () => {
    const schoolSupplies = [
        { name: "Notebook", price: 300.99 },
        { name: "Pencil", price: 150.99 },
        { name: "Pen", price: 1000.49 },
        { name: "Eraser", price: 500.49 },
        { name: "Ruler", price: 90.99 },
        { name: "Calculator", price: 25000.99 },
        { name: "Backpack", price: 100000.99 },
    ];

    return (
        <div>
            <h1>School Supplies</h1>
            <div className="product-list">
                {schoolSupplies.map((item, index) => (
                    <div key={index} className="product">
                        <h3>{item.name}</h3>
                        <p>Price: P{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
