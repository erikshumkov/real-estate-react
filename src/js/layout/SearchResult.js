import React from 'react';

import Result from '../components/Result';
import Pagination from '../components/Pagination';

const SearchResult = ({
  filteredData,
  handleSelect,
  posts,
  postsPerPage,
  changePage,
  currentPage
}) => {
  return (
    <div>
      <main id='results'>
        <div className='wrapper'>
          <p>
            <span>{filteredData.length}</span> bostäder till salu
          </p>
          <div className="result-menu">
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
            {/* <div className="map-btn">Karta</div> */}
          </div>

          <div className='results-grid'>
            {posts.map((data, index) => {
              return <Result key={index} data={data} />;
            })}
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={filteredData.length}
            changePage={changePage}
            currentPage={currentPage}
          />
        </div>
      </main>
    </div>
  );
};

export default SearchResult;
