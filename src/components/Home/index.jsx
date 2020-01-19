import React from 'react'
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import iconLogo from '../../img/logo.svg'
import './styles'

const Home = ({ handleMenu }) => {
  const init = {};

  return (
    <div className="home">
      <span className="home__copyright">created by itshy</span>
      <img className="home__logo" src={iconLogo} alt="logo" />
      <span className="home__title">Learning japanese</span>
      <span className="home__subtitle">Lessons and a lot of mini-applications for learning japanese</span>
      <Button className="button home__button" onClick={handleMenu}>Start</Button>
    </div>
  )
};

Home.propTypes = {
  handleMenu: PropTypes.func.isRequired,
};

export default Home
