import styled from 'styled-components';
import Pagination from './Pagination';
const PaginationStyled = styled(Pagination)`
  display: flex;
  flex-direction: row;
  .datagridPaginationItem {
    list-style: none;
    padding: 5px 11px;
  }
  .datagridPaginationActive {
    display: block;
  }
  .datagridPaginationItemLink {
    text-decoration: none;
    color: #000;
  }
  .datagridPaginationItemLinkActive {
    background-color: #cccccc;
    padding: 3px 10px;
    border-radius: 6px;
  }
`;
export default PaginationStyled;
