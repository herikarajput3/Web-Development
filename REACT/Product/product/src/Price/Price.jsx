import React from 'react';

const Price = () => {
    const products = [
        { id: 1, name: 'Smartphone', price: 299.99 },
        { id: 2, name: 'Laptop', price: 799.99 },
        { id: 3, name: 'Headphones', price: 49.99 },
        { id: 4, name: 'Airpods', price: 490.99 },
        { id: 5, name: 'Speakers', price: 999.99 },
    ];

    const handleBuyNow = (price) => {
        console.log(`Price: ${price}`);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleBuyNow(product.price)}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Price;
