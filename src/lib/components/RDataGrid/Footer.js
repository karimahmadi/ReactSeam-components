import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import PageSizeSelection from './PageSizeSelection';
import PaginationStyled from './PaginationStyled';
import FooterItemStyled from './FooterItemStyled';

import FooterStyled from './FooterStyled';
const Footer = ({
  renderFooter,
  showPagination,
  showPageSizeSelection,
  totalItemsCount,
  // pagination
  onChangePage,
  pageRangeDisplayed,
  activePage,
  // page sizing
  renderPageSize,
  sizeList,
  selectedSize,
  onChangePageSize,
}) => {
  const [pageSize, setPageSize] = useState();
  const handleChangePageSize = (newPageSize, newPageNumber) => {
    setPageSize(newPageSize);
    onChangePageSize(newPageSize, newPageNumber || pageSize);
  };
  let footerRender = (
    <FooterStyled>
      <FooterItemStyled>
        {typeof renderPageSize === 'function' ? (
          renderPageSize()
        ) : (
          <PageSizeSelection onChange={handleChangePageSize} />
        )}
      </FooterItemStyled>
      <FooterItemStyled>
        <PaginationStyled
          totalItemsCount={totalItemsCount}
          onChange={onChangePage}
          activePage={activePage}
          pageRangeDisplayed={pageRangeDisplayed}
          itemsCountPerPage={pageSize}
        />
      </FooterItemStyled>
    </FooterStyled>
  );
  if (typeof renderFooter === 'function') footerRender = renderFooter();
  return <Fragment>{footerRender}</Fragment>;
};

Footer.propTypes = {
  showPagination: PropTypes.bool,
  showPageSizeSelection: PropTypes.bool,
  totalItemsCount: PropTypes.number,
  renderFooter: PropTypes.func,
  // pagination
  onChangePage: PropTypes.func,
  pageRangeDisplayed: PropTypes.number,
  activePage: PropTypes.number,
  // page sizing
  renderPageSize: PropTypes.func,
  sizeList: PropTypes.array,
  selectedSize: PropTypes.number,
  onChangePageSize: PropTypes.func,
};
export default Footer;
