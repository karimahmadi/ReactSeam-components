import styled from 'styled-components';
import { TabPanel } from './TabPanel';

const StyledTabPanel = styled(TabPanel)`
  display: ${props =>
    props.hidden === undefined || props.hidden ? 'none' : 'auto'};
`;
export { StyledTabPanel };
