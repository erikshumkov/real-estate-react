import React, { useState } from 'react';
import Suggestions from '../components/Suggestions';
import FilterButtons from './filtermenu/FilterButtons';
import FilterSelect from './filtermenu/FilterSelect';

const FilterSection = ({
  handleCheckboxToggle,
  filter,
  searchString,
  search,
  handlePrice,
  handleRooms
}) => {
  const [filtered, setFiltered] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cities = ["Linköping", "Göteborg", "Stockholm"];

  const onChange = e => {
    const searchInput = e.currentTarget.value;

    const filterCities = cities.filter(city => city.toLowerCase().includes(searchInput.toLowerCase()));

    setFiltered(filterCities);
    setShowSuggestions(true);
    searchString(searchInput);
  }

  const onClick = e => {
    setFiltered([]);
    setShowSuggestions(false);
    searchString(e.currentTarget.innerText);
  }

  return (
    <div>
      <div id='filter-section'>
        <div className='wrapper'>
          <div className='filter-search'>
            <form>
              <input
                type='text'
                id='search'
                value={search}
                onChange={onChange}
                placeholder='Sök på stad...'
              />
              <Suggestions filtered={filtered} showSuggestions={showSuggestions} search={search} onClick={onClick} />
            </form>
          </div>

          <FilterButtons filter={filter} handleCheckboxToggle={handleCheckboxToggle} />

          <div className="more-filter">
            <input type="checkbox" id="toggle" className="hidden" />
            <label htmlFor="toggle" className="extra-filter-toggle">Fler sökfilter</label>
            <div className="extra-filter">
              <FilterSelect handlePrice={handlePrice} handleRooms={handleRooms} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
