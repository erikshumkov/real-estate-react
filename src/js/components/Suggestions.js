import React from 'react'

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

export default Suggestions
