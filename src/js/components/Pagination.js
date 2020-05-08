import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, changePage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  let totalPages = pageNumbers.length + 1;

  return (
    <div className='pagination'>
      <div
        className='page-prev page-btn'
        onClick={() => changePage(previousPage, totalPages)}
      >
        <i className='fas fa-angle-double-left'></i>
        Föregående
      </div>

      {pageNumbers.map(number => (
        <div
          key={number}
          className='page-num'
          onClick={() => changePage(number)}
        >
          {number}
        </div>
      ))}
      <div className='page-next page-btn' onClick={() => changePage(nextPage, totalPages)}>
        Nästa
        <i className='fas fa-angle-double-right'></i>
      </div>
    </div>
  );
};

export default Pagination;
