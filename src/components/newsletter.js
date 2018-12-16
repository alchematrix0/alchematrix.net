import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './bulma.scss'

class Newsletter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      invalidEmail: false
    }
  }
  handleInput = (e) => this.setState({email: e.target.value})
  handleSubmit = (e) => {
    e.preventDefault()
    let email = this.state.email
    if (email.length && email.includes('@') && email.includes('.')) {
      console.log(`got a valid email ${email}`)
      fetch('/handleSignup', {email})
    } else {
      this.setState({invalidEmail: true})
    }
  }
  render () {
    return this.props.isOpen ? (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Ready to take the blue pill?</p>
            <button class="delete" aria-label="close" onClick={this.props.toggleNewsletter}></button>
          </header>
          <section class="modal-card-body">
            <p>Learn the <b>alchemy of the matrix</b></p>
            <p>Our newsletter is a <em>monthly subsciption</em> to the <b>best</b> resources for the spiritual scientist.</p>
            <p>Sign up below for consistently life altering content that will help you transmute the matrix and access your creative potential as a spiritual being having a human experience</p>
          </section>
          <footer class="modal-card-foot">
            <form onSubmit={this.handleSubmit}>
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input className="input is-primary" type="text" name="email" onChange={this.handleInput} value={this.state.email} />
                </div>
                <div className="control">
                  <button type="submit" class="button is-info">I'm in</button>
                </div>
              </div>
            </form>
          </footer>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.props.toggleNewsletter}></button>
      </div>
    ) : null
  }
}

Newsletter.propTypes = {
  isOpen: PropTypes.bool,
}

Newsletter.defaultProps = {
  isOpen: false,
}

export default Newsletter
