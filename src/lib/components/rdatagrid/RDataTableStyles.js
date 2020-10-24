import { createGlobalStyle } from 'styled-components';
const RDataTableGlobalStyles = createGlobalStyle`
  .rs-table-row{
    background: #fff;
  };
  .rs-table-cell{
    background: transparent!important;
  }
  .rs-table-row-selection{
    background-color:${props => props.selectionColor};
  }
`;
export default RDataTableGlobalStyles;
