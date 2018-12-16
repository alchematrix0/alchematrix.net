import React, { Component } from 'react'
import PropTypes from 'prop-types'
import headerLogo from '../images/alchem-type-logo2.png'
import Newsletter from './newsletter'
import { FiYoutube } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import './bulma.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newsletterIsOpen: false
    }
  }
  toggleNewsletter = () => this.setState({newsletterIsOpen: !this.state.newsletterIsOpen})
  render () {
    return (
      <header className="nav container navbar is-fixed-top is-transparent" style={{maxWidth: "1180px"}}>
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img className="logo-header" alt="Alchematrix logo" src={headerLogo} />
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a href='/about'>About</a>
              </p>
              <span className="social icon is-medium">
                <FiYoutube />
              </span>
              <span className="social icon is-medium">
                <FiInstagram />
              </span>
              <p className="control">
                <span className="button is-primary" onClick={this.toggleNewsletter}>
                  <span>{this.props.tagLine}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <Newsletter isOpen={this.state.newsletterIsOpen} toggleNewsletter={this.toggleNewsletter} />
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  tagLine: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
  tagLine: 'sometag'
}

export default Header
