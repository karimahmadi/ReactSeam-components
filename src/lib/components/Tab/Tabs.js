/**
 *
 * Tabs
 *
 */

import React from 'react';
import MatTabs from '@material-ui/core/Tabs';
import MatTab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Tabs({
  children,
  value,
  onChange,
  variant,
  textColor,
  indicatorColor,
}) {
  return (
    <MatTabs
      value={value}
      onChange={onChange}
      variant={variant}
      textColor={textColor}
      indicatorColor={indicatorColor}
    >
      {children.map(item => (
        <MatTab key={item.props.id} {...item.props}>
          {item.children}
        </MatTab>
      ))}
    </MatTabs>
  );
}

Tabs.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  variant: PropTypes.string,
  textColor: PropTypes.string,
  indicatorColor: PropTypes.string,
};

export default Tabs;
