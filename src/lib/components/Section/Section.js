import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import { CardView } from './cardView';
import { HeaderText } from './HeaderText';

/**
 *
 * Section
 *
 */

function Section({ children, title, width = '100%', grid }) {
  return (
    <CardView width={width} grid={grid ? 'true' : 'false'}>
      {title && (
        <Header>
          <HeaderText>{`« ${title} »`}</HeaderText>
        </Header>
      )}
      <div style={{ paddingTop: '5px' }}>{children}</div>
    </CardView>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  width: PropTypes.string,
  grid: PropTypes.bool,
};

export default Section;
