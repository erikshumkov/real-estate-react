import React from 'react'

const FilterButtons = ({ filter, changeIt }) => {
  return (
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
  )
}

const filterTrue = {
  background: '#1493bc',
  color: '#fff'
};

const filterFalse = {
  background: '#eee'
};

export default FilterButtons
