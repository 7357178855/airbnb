// FilterModal.js
import React, { useState } from 'react';
// import './FilterModal.css';

const FilterModal = ({ onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    wifi: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApply = () => {
    onApplyFilters(filters);
  };

  return (
    <div className="filter-modal">
      <h2>Filter Options</h2>
      <label>
        Minimum Price:
        <input type="number" name="minPrice" value={filters.minPrice} onChange={handleChange} />
      </label>
      <label>
        Maximum Price:
        <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleChange} />
      </label>
      <label>
        WiFi Availability:
        <select name="wifi" value={filters.wifi} onChange={handleChange}>
          <option value="">All</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label>
        Rating:
        <select name="rating" value={filters.rating} onChange={handleChange}>
          <option value="">All</option>
          <option value="above4">Above 4</option>
          <option value="above3">Above 3</option>
        </select>
      </label>
      <button onClick={handleApply}>Apply Filters</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default FilterModal;
