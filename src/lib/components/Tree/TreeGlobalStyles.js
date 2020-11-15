import { createGlobalStyle } from 'styled-components';
const TreeGlobalStyles = createGlobalStyle`
  .rs-table-row{
    border-bottom: none!important;
  };
  .rs-table-row{
    background: #fff;
  };
  .rs-table-cell{
    background: transparent!important;
  };
  .rs-table-row-selection{
    background-color:${props => props.selectionColor};
  };
`;
export default TreeGlobalStyles;
