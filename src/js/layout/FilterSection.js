import React, { useState } from 'react';
import Suggestions from '../components/Suggestions';

const FilterSection = ({
  changeIt,
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
          <div className='filter-menu'>
            <div
              className='filter-box'
              style={filter.villa ? filterTrue : filterFalse}
            >
              <label htmlFor='villa'></label>
              <input
                type='checkbox'
                name='villa'
                id='villa'
                onClick={changeIt}
              />
              <i className='fas fa-home'></i>
              villa
            </div>
            <div
              className='filter-box'
              style={filter.apartment ? filterTrue : filterFalse}
            >
              <label htmlFor='apartment'></label>
              <input
                type='checkbox'
                name='apartment'
                id='apartment'
                onClick={changeIt}
              />
              <i className='far fa-building'></i>
              lägenhet
            </div>
            <div
              className='filter-box'
              style={filter.radhus ? filterTrue : filterFalse}
            >
              <label htmlFor='radhus'></label>
              <input
                type='checkbox'
                name='radhus'
                id='radhus'
                onClick={changeIt}
              />
              <i className='fas fa-home'></i>
              <i className='fas fa-home'></i>
              radhus
            </div>
            <div
              className='filter-box'
              style={filter.fritidshus ? filterTrue : filterFalse}
            >
              <label htmlFor='fritidshus'></label>
              <input
                type='checkbox'
                name='fritidshus'
                id='fritidshus'
                onClick={changeIt}
              />
              <i className='fas fa-umbrella-beach'></i>
              fritidshus
            </div>
          </div>
          <div className='filter-menu-extra'>
            <div className='rooms'>
              <div className='room'>
                <label htmlFor='room'>Minst antal rum</label>
                <select
                  name='room'
                  id='room'
                  defaultValue={'all'}
                  onChange={e => handleRooms(e.target.value)}
                >
                  <option value='all'>Alla</option>
                  <option value='1'>1 rum</option>
                  <option value='2'>2 rum</option>
                  <option value='3'>3 rum</option>
                  <option value='4'>4 rum</option>
                  <option value='5'>5 rum</option>
                  <option value='6'>6 rum</option>
                </select>
              </div>

              <div className='pricetag'>
                <label htmlFor='price'>Högst pris</label>
                <select
                  name='price'
                  id='price'
                  defaultValue={'none'}
                  onChange={e => handlePrice(e.target.value)}
                >
                  <option value='none'>Inget</option>
                  <option value='250000'>250 000 kr</option>
                  <option value='500000'>500 000 kr</option>
                  <option value='1000000'>1 000 000 kr</option>
                  <option value='2000000'>2 000 000 kr</option>
                  <option value='4000000'>4 000 000 kr</option>
                  <option value='6000000'>6 000 000 kr</option>
                  <option value='8000000'>8 000 000 kr</option>
                  <option value='10000000'>10 000 000 kr</option>
                </select>
              </div>
            </div>
            <div className='price'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const filterTrue = {
  background: '#1493bc',
  color: '#fff'
};

const filterFalse = {
  background: '#eee'
};

export default FilterSection;
