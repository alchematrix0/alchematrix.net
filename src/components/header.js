// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import headerLogo from '../images/alchem-type-logo1.png'
import { FiYoutube } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';

import './bulma.scss'

const Header = ({ siteTitle, tagLine }) => (
  <header className="nav container navbar is-fixed-top is-transparent" style={{maxWidth: "1180px"}}>
    <div className="navbar-brand">
      <a className="navbar-item" href="https://www.alchematrix.net">
        <img className="logo-header" alt="Alchematrix logo" src={headerLogo} />
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <span className="social icon is-medium">
            <FiYoutube />
          </span>
          <span className="social icon is-medium">
            <FiInstagram />
          </span>
          <p className="control">
            <span className="button is-primary">
              <span>{tagLine}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  tagLine: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
  tagLine: 'sometag'
}

export default Header
