//src/components/ImageGrid.js
import React from 'react';
import PropTypes from 'prop-types';

const ImageGrid = ({ products }) => {
    return (
        <div className="image-grid">
            {products.map((product) => (
                <div key={product.id} className="product">
                    {product.image && (
                        <img
                            src={product.image} // Directly use the image from the API
                            alt={product.title}
                            className="product-image"
                        />
                    )}
                    <h3>{product.title}</h3>
                    <p>${product.price}</p> {/* Adjusted to display price */}
                    <p>
                        {product.description.length > 100
                            ? product.description.slice(0, 100) + '...'
                            : product.description}
                    </p>
                    {product.description.length > 100 && (
                        <button className="see-more">See More</button>
                    )}
                </div>
            ))}
        </div>
    );
};

ImageGrid.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ImageGrid;
