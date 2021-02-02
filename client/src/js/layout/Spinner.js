import React, { Fragment } from 'react'
import spinner from './spinner.gif'

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block', gridColumnStart: "2" }}
      alt="Loading..."
    />
  </Fragment>
);

export default Spinner