import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import Result from '../components/Result';
import { connect } from "react-redux"
import { sortByNewest, addPosts } from "../../actions/itemActions"
import Spinner from './Spinner';

const SearchResult = ({
  addMoreItems,
  sortByNewest,
  addPosts,
  filtered: { filteredData, postsShowing, currentPage, data, loading }
}) => {

  const onChange = e => {
    sortByNewest(e.target.value)
  }

  // Get current posts
  const lastPostIndex = currentPage * postsShowing;
  const firstPostIndex = lastPostIndex - postsShowing;
  const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);

  return (
    <Fragment>
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
              onChange={onChange}
            >
              <option value='newest'>Nyast</option>
              <option value='lowest'>Lägst pris</option>
              <option value='highest'>Högst pris</option>
            </select>

            <div className="map">
              <Link to="/karta/bostad">
                <i className="fas fa-map-marker-alt"></i>
                <span>Visa på karta</span>
              </Link>
            </div>
          </div>

          <div className='results-grid'>
            {loading && data.length === 0 ? <Spinner /> : currentPosts.map((data, index) => <Result key={index} data={data} />)}
          </div>
          {postsShowing > filteredData.length ? null
            : (
              <div className="button-div" onClick={() => addPosts(postsShowing + 18)}>
                <div className="show-more">Visa fler resultat</div>
              </div>
            )
          }

        </div>
      </main>
    </Fragment>
  );
};

SearchResult.propTypes = {
  filtered: PropTypes.object.isRequired,
  sortByNewest: PropTypes.func.isRequired,
  addPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  filtered: state.item
})

export default connect(mapStateToProps, { sortByNewest, addPosts })(SearchResult)
