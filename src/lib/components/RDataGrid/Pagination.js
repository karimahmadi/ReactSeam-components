import PaginationReactJs from 'react-js-pagination';
import React from 'react';
import PropTypes from 'prop-types';
const Pagination = ({
  className,
  totalItemsCount,
  onChange,
  activePage,
  pageRangeDisplayed,
  itemsCountPerPage,
}) => {
  const handlePageSwitch = e => {
    if (typeof onChange === 'function') onChange(e);
  };
  return (
    <PaginationReactJs
      activePage={activePage}
      innerClass={className}
      itemClass="datagridPaginationItem"
      activeClass="datagridPaginationActive"
      activeLinkClass="datagridPaginationItemLinkActive"
      linkClass="datagridPaginationItemLink"
      totalItemsCount={totalItemsCount}
      onChange={handlePageSwitch}
      pageRangeDisplayed={pageRangeDisplayed}
      itemsCountPerPage={itemsCountPerPage}
      prevPageText={<i className="icon-chevron-small-right" />}
      nextPageText={<i className="icon-chevron-small-left" />}
      lastPageText={<i className="icon-chevrons-left" />}
      firstPageText={<i className="icon-chevrons-right" />}
      hideDisabled
    />
  );
};

Pagination.propTypes = {
  className: PropTypes.any,
  totalItemsCount: PropTypes.number,
  onChange: PropTypes.func,
  activePage: PropTypes.number,
  pageRangeDisplayed: PropTypes.string,
  itemsCountPerPage: PropTypes.string,
};

export default Pagination;
