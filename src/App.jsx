//src/App.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/index.css';

// Navbar Component
const Navbar = () => {
    return (
        <header>
            <h1>Welcome to My E-commerce Site</h1>
            <nav>
                <button className="auth-btn">Sign Up</button>
                <button className="auth-btn">Sign In</button>
            </nav>
        </header>
    );
};

// ImageGrid Component
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

// Main App Component
const App = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Added error state

    // Fetching products from the new API
    useEffect(() => {
        const fetchProductsAndCategories = async () => {
            try {
                const productResponse = await fetch('https://fakestoreapi.com/products');
                // Simulating categories as unique product categories (extracted from product data)
                const categoryResponse = await fetch('https://fakestoreapi.com/products/categories');

                // Check if the responses are OK
                if (!productResponse.ok || !categoryResponse.ok) {
                    throw new Error('Failed to fetch data');
                }

                const productData = await productResponse.json();
                const categoryData = await categoryResponse.json();

                setProducts(productData);
                setCategories(categoryData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load data. Please try again later.');
                setLoading(false);
            }
        };

        fetchProductsAndCategories();
    }, []);

    return (
        <div>
            <Navbar />
            <main>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <>
                        <h2>Categories</h2>
                        <ul>
                            {categories.map((category) => (
                                <li key={category}>
                                    {category}
                                </li>
                            ))}
                        </ul>
                        <ImageGrid products={products} />
                    </>
                )}
            </main>
        </div>
    );
};

// Prop types validation
Navbar.propTypes = {
    // If you decide to use props, add PropTypes here
};

ImageGrid.propTypes = {
    products: PropTypes.array.isRequired,
};

export default App;
