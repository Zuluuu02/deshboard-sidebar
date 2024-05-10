import React from 'react';

const Product = () => {
    const handleBuyClick = (productName) => {

        console.log(`Buying ${productName}`);
    };

    return (
        <div className="product-container">
            <h2 className='font-bold'>School Supplies</h2>
            <div className="item">
                <h3>Pens</h3>
                <p>High-quality pens for writing</p>
                <button onClick={() => handleBuyClick("Pens")}>Buy</button>
            </div>
            <div className="item">
                <h3>Notebooks</h3>
                <p>Durable notebooks for note-taking</p>
                <button onClick={() => handleBuyClick("Notebooks")}>Buy</button>
            </div>
            <div className="item">
                <h3>Pencil</h3>
                <p>Standard pencils for drawing and writing</p>
                <button onClick={() => handleBuyClick("Pencils")}>Buy</button>
            </div>
            <div className="item">
                <h3>Eraser</h3>
                <p>Standard eraser for drawing and writing</p>
                <button onClick={() => handleBuyClick("Pencils")}>Buy</button>
            </div>
            <div className="item">
                <h3>Ruler</h3>
                <p>Standard Ruler for drawing and writing</p>
                <button onClick={() => handleBuyClick("Pencils")}>Buy</button>
            </div>
            <div className="item">
                <h3>Calculator</h3>
                <p>Standard Calculator for everyday use</p>
                <button onClick={() => handleBuyClick("Pencils")}>Buy</button>
            </div>
            <div className="item">
                <h3>Backpack</h3>
                <p>Standard Backpack for everyday use</p>
                <button onClick={() => handleBuyClick("Pencils")}>Buy</button>
            </div>
            
        </div>
        
    );
};

export default Product;
