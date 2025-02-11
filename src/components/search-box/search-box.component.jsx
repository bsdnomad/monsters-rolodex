import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div className="search-wrapper">
            <input
                className="search"
                type='search'
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    );
};
