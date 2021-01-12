import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { searchItems } from "../../actions/itemActions"
import Suggestions from '../components/Suggestions'
import FilterButtons from './filtermenu/FilterButtons'
import FilterSelect from './filtermenu/FilterSelect'

const FilterSection = ({
  searchItems,
  item: { search }
}) => {
  const [filtered, setFiltered] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cities = ["Linköping", "Göteborg", "Stockholm"];

  const onChange = e => {
    const searchInput = e.currentTarget.value;

    const filterCities = cities.filter(city => city.toLowerCase().includes(searchInput.toLowerCase()));

    setFiltered(filterCities)
    setShowSuggestions(true)
    searchItems(searchInput)
  }

  const onClick = e => {
    setFiltered([])
    setShowSuggestions(false)
    searchItems(e.currentTarget.innerText)
  }

  const onSubmit = e => {
    e.preventDefault();
  }

  return (
    <Fragment>
      <div id='filter-section'>
        <div className='wrapper'>
          <div className='filter-search'>
            <form onSubmit={(e) => onSubmit(e)}>
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

          <FilterButtons />

          <div className="more-filter">
            <input type="checkbox" id="toggle" className="hidden" />
            <label htmlFor="toggle" className="extra-filter-toggle">Fler sökfilter</label>
            <div className="extra-filter">
              <FilterSelect />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

FilterSection.propTypes = {
  item: PropTypes.object.isRequired,
  searchItems: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { searchItems })(FilterSection)
