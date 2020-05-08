import React from 'react'

const FilterSelect = ({ handleRooms, handlePrice }) => {
  return (
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
  )
}

export default FilterSelect
