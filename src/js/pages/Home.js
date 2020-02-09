import React from 'react'
import FilterSection from '../layout/FilterSection';
import SearchResult from '../layout/SearchResult';

const Home = ({ changeIt, filter, searchString, setSearch, search, handleRooms, handlePrice, filteredData, handleSelect, posts, postsPerPage, changePage, currentPage }) => {


  return (
    <div>
      <FilterSection
        changeIt={changeIt}
        filter={filter}
        searchString={searchString}
        search={search}
        handleRooms={handleRooms}
        handlePrice={handlePrice}
      />

      <SearchResult
        filteredData={filteredData}
        handleSelect={handleSelect}
        posts={posts}
        postsPerPage={postsPerPage}
        changePage={changePage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Home
