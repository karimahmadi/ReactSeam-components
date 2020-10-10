/**
 *
 * ChqMenu
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

function ChqMenu({
  items,
  childrenProperty = 'children',
  titleProperty = 'title',
  urlProperty = 'url',
}) {
  const renderChilds = childs =>
    childs.map(childitem => (
      <MenuItem key={uuid()}>
        <Link
          to={`${childitem[urlProperty]}`}
          style={{ color: childitem.color }}
        >
          {childitem[titleProperty]}
        </Link>
      </MenuItem>
    ));

  const renderItems = pItems =>
    pItems.map(item => (
      <MenuItem key={uuid()}>
        <Link
          to={item[urlProperty] ? `${item[urlProperty]}` : ''}
          style={{ color: item.color }}
        >
          {item[titleProperty]}
        </Link>
        {item[childrenProperty] && (
          <Menu className="dropdown_1column">
            {renderChilds(item[childrenProperty])}
          </Menu>
        )}
      </MenuItem>
    ));

  return <Menu id="menu">{renderItems(items)}</Menu>;
}

ChqMenu.propTypes = {
  items: PropTypes.array,
  childrenProperty: PropTypes.string,
  titleProperty: PropTypes.string,
  urlProperty: PropTypes.string,
};

export default ChqMenu;
