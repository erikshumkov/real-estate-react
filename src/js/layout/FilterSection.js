import React from 'react';

const FilterSection = ({ changeIt, filter, searchString, search }) => {
  return (
    <div>
      <div id='filter-section'>
        <div className='wrapper'>
          <div className='filter-search'>
            <form>
              <input
                type='text'
                name='search'
                id='search'
                value={search}
                onChange={e => searchString(e.target.value)}
                placeholder='Sök på stad'
              />
            </form>
          </div>
          <div className='filter-menu'>
            <div
              className='filter-box'
              style={
                filter.villa
                  ? { background: '#fff', borderColor: '#000' }
                  : { background: '#eee', borderColor: 'lightgrey' }
              }
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
              style={
                filter.apartment
                  ? { background: '#fff', borderColor: '#000' }
                  : { background: '#eee', borderColor: 'lightgrey' }
              }
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
              style={
                filter.radhus
                  ? { background: '#fff', borderColor: '#000' }
                  : { background: '#eee', borderColor: 'lightgrey' }
              }
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
              style={
                filter.fritidshus
                  ? { background: '#fff', borderColor: '#000' }
                  : { background: '#eee', borderColor: 'lightgrey' }
              }
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
          {/* <div className='filter-menu-extra'>
            <div className='rooms'>
              <div className='room'>
                <label htmlFor='room'>Minst antal rum</label>
                <select name='room' id='room'>
                  <option value=''>Alla</option>
                  <option value=''>1 rum</option>
                  <option value=''>2 rum</option>
                  <option value=''>3 rum</option>
                  <option value=''>4 rum</option>
                  <option value=''>5 rum</option>
                  <option value=''>6 rum</option>
                </select>
              </div>

              <div className='pricetag'>
                <label htmlFor='price'>Högst pris</label>
                <select name='price' id='price'>
                  <option value=''>Inget</option>
                  <option value=''>2 000 000 kr</option>
                  <option value=''>4 000 000 kr</option>
                  <option value=''>6 000 000 kr</option>
                  <option value=''>8 000 000 kr</option>
                  <option value=''>10 000 000 kr</option>
                </select>
              </div>
            </div>
            <div className='price'></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
