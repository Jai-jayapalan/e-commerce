import React from 'react';

const Cart = ({ cartItems, increaseQuantity, decreaseQuantity }) => {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleMakePayment = () => {
        alert(`Thus ${calculateTotal()} Payment done successfully!`);
    };

    return (
        <div className="border rounded-lg p-4 shadow-lg mt-8">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="flex justify-between items-center mb-2">
                                <div>
                                    <span>{item.name} - ${item.price}</span>
                                    <div className="flex items-center mt-2">
                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => increaseQuantity(item.id)}
                                            className="bg-green-500 text-white px-2 py-1 rounded ml-2"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-xl font-bold">Total: ${calculateTotal()}</p>
                    <button
                        onClick={handleMakePayment}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Make Payment
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
