import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import './styles'

const Menu = ({ active, handleMenu }) => {
  return (
    <div className={cn(
      'menu',
      { 'menu__active': active },
    )}>
      <IconButton size="medium" className="menu__close">
        <ArrowDownwardIcon fontSize="inherit" onClick={handleMenu} />
      </IconButton>
    </div>
  );
};

Menu.propTypes = {
  active: PropTypes.bool,
  handleMenu: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  active: false,
};

export default Menu;
