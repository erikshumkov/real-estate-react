import React from 'react'
import FilterSection from '../layout/FilterSection';
import SearchResult from '../layout/SearchResult';

const Home = ({ handleCheckboxToggle, filter, searchString, setSearch, search, handleRooms, handlePrice, filteredData, handleSelect, posts, postsPerPage, changePage, currentPage, addMoreItems }) => {


  return (
    <div>
      <FilterSection
        handleCheckboxToggle={handleCheckboxToggle}
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
        addMoreItems={addMoreItems}
      />
    </div>
  )
}

export default Home
