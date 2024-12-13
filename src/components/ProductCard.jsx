//src/components/ProductCard.js
import PropTypes from 'prop-types';

const ProductCard = ({ product, imageUrl }) => {
    return (
        <div>
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={product.name}
                    className="product-image"
                />
            )}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    imageUrl: PropTypes.string, // imageUrl is optional
};
