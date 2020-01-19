import React from 'react';

import Result from '../components/Result';

const SearchResult = ({ data, filteredData, handleSelect }) => {
  return (
    <div>
      <main id='results'>
        <div className='wrapper'>
          <p>
            <span>{filteredData.length}</span> bostäder till salu
          </p>
          <select
            name='select-filter'
            id='select-filter'
            defaultValue={'newest'}
            onChange={e => handleSelect(e.target.value)}
          >
            <option value='newest'>Nyast</option>
            <option value='lowest'>Lägst pris</option>
            <option value='highest'>Högst pris</option>
          </select>

          <div className='results-grid'>
            {filteredData.map((data, index) => {
              return <Result key={index} data={data} />;
            })}
          </div>
          {/* <div className='pagination'>
            <div className='page-prev page-btn'>
              <i className='fas fa-angle-double-left'></i>
              Föregående
            </div>
            <div className='page-num'>1</div>
            <div className='page-num'>2</div>
            <div className='page-num'>3</div>
            <div className='page-next page-btn'>
              Nästa
              <i className='fas fa-angle-double-right'></i>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default SearchResult;
