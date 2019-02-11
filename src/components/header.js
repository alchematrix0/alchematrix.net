import React, { Component } from 'react'
import PropTypes from 'prop-types'
import headerLogo from '../images/alchemlogo-3.png'
import { FiInstagram } from 'react-icons/fi'
import './bulma.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newsletterIsOpen: false
    }
  }
  toggleNewsletter = () => this.setState({newsletterIsOpen: !this.state.newsletterIsOpen})
  componentDidMount () {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }
  render () {
    return (
      <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img
                className="logo-header"
                alt="Alchematrix logo"
                src={headerLogo}
              />
            </a>

            <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
            </div>
            <div className="navbar-end">
              <a className="navbar-item" href='/portfolio'>Portfolio</a>
              <a className="navbar-item" href='/hireme'>Hire Me</a>
              <a className="navbar-item" href='/about'>About</a>
              <div className="navbar-item">
                <div className="buttons">
                  <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/alchematrix0" className="button is-light">
                    <span className="icon"><FiInstagram /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
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
