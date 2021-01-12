import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { filterByHomeType } from "../../../actions/itemActions"

const FilterButtons = ({ filterByHomeType, item: { settings: { villa, apartment, radhus, fritidshus } } }) => {

  const checkboxToggle = e => {
    filterByHomeType({
      name: e.target.name,
      value: e.target.checked
    })
  }

  return (
    <div className='filter-menu'>
      <div
        className='filter-box'
        style={villa ? filterTrue : filterFalse}
      >
        <label htmlFor='villa'></label>
        <input
          type='checkbox'
          name='villa'
          id='villa'
          onClick={checkboxToggle}
        />
        <i className='fas fa-home'></i>
              villa
            </div>
      <div
        className='filter-box'
        style={apartment ? filterTrue : filterFalse}
      >
        <label htmlFor='apartment'></label>
        <input
          type='checkbox'
          name='apartment'
          id='apartment'
          onClick={checkboxToggle}
        />
        <i className='far fa-building'></i>
              lägenhet
            </div>
      <div
        className='filter-box'
        style={radhus ? filterTrue : filterFalse}
      >
        <label htmlFor='radhus'></label>
        <input
          type='checkbox'
          name='radhus'
          id='radhus'
          onClick={checkboxToggle}
        />
        <i className='fas fa-home'></i>
        <i className='fas fa-home'></i>
              radhus
            </div>
      <div
        className='filter-box'
        style={fritidshus ? filterTrue : filterFalse}
      >
        <label htmlFor='fritidshus'></label>
        <input
          type='checkbox'
          name='fritidshus'
          id='fritidshus'
          onClick={checkboxToggle}
        />
        <i className='fas fa-umbrella-beach'></i>
              fritidshus
            </div>
    </div>
  )
}

const filterTrue = {
  background: '#1493bc',
  color: '#fff'
};

const filterFalse = {
  background: '#eee'
};

FilterButtons.propTypes = {
  item: PropTypes.object.isRequired,
  filterByHomeType: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { filterByHomeType })(FilterButtons)
