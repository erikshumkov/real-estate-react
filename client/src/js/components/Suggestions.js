import React from 'react'
import PropTypes from 'prop-types'

const Suggestions = ({ filtered, showSuggestions, search, onClick }) => {
  if (showSuggestions && search) {
    if (filtered.length) {
      return (
        <ul className="suggestions">
          {filtered.map(city => {
            return (
              <li key={city} onClick={onClick}>
                {city}
              </li>
            );
          })}
        </ul>
      )
    } else {
      return (
        <div className="no-suggestions">
          <em>Hittade inget förslag (testa Linköping, Stockholm, Göteborg)</em>
        </div>
      );
    }
  } else {
    return null;
  }
}

Suggestions.propTypes = {
  filtered: PropTypes.array.isRequired,
  showSuggestions: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
}

export default Suggestions
