//src/components/Categories.js
import PropTypes from 'prop-types';

const Categories = ({ categories }) => {
    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, // id must be a number and required
            name: PropTypes.string.isRequired, // name must be a string and required
        })
    ).isRequired, // categories must be an array and required
};

export default Categories;
