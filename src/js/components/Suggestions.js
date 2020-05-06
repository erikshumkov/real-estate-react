import React from 'react'

const Suggestions = (props) => {
  if (props.showResult) {
    const options = props.results.map(result => (
      <li onClick={props.btnClick} key={result}>
        {result}
      </li>
    ))
    return <ul className="suggestions">{options}</ul>
  } else return null;
}

export default Suggestions
