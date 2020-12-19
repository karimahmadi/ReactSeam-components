import React from 'react';
import PropsType from 'prop-types';

const PostfixContainer = ({ children, required, postfix }) => (
  <div style={{ display: 'flex', width: '100%' }}>
    {children}
    {required && <span style={{ color: 'red' }}>&lowast;</span>}
    {postfix && <span style={{whiteSpace: 'nowrap', fontSize: '12.8px', fontFamily:'Yekan'}}>{postfix}</span>}
  </div>
);

PostfixContainer.propTypes = {
  children: PropsType.node,
  required: PropsType.bool,
  postfix: PropsType.string,
};

export default PostfixContainer;
