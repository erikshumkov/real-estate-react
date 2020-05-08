import React from 'react'

const NoMatch404 = () => {

  const styling = {
    height: "100vh",
    padding: "50px 20px 20px 50px",
    textAlign: "center"
  }

  return (
    <div style={styling}>
      <h1>
        404, hittade inte sidan.
      </h1>
    </div>
  )
}

export default NoMatch404
