import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2em auto;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  position: ${props => props.position};
  top: ${props => (props.top ? props.top : 0)}px;
`;

export default Wrapper;
