import React from 'react';
import { Link } from "react-router-dom";

import Result from '../components/Result';

const SearchResult = ({
  filteredData,
  handleSelect,
  posts,
  postsPerPage,
  changePage,
  currentPage,
  addMoreItems
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

            <div className="map">
              <Link to="/karta/bostad">
                <i className="fas fa-map-marked"></i>
                <span>Visa på karta</span>
              </Link>
            </div>
          </div>

          <div className='results-grid'>
            {posts.map((data, index) => {
              return <Result key={index} data={data} />;
            })}
          </div>
          {/* <Pagination
            postsPerPage={postsPerPage}
            totalPosts={filteredData.length}
            changePage={changePage}
            currentPage={currentPage}
          /> */}
          {console.log(filteredData.length, postsPerPage)}
          {postsPerPage > filteredData.length ? null
            : (
              <div className="button-div" onClick={addMoreItems}>
                <div className="show-more">Visa fler resultat</div>
              </div>
            )
          }

        </div>
      </main>
    </div>
  );
};

export default SearchResult;
