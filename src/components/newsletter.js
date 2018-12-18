import PropTypes from 'prop-types'
import React, { Component } from 'react'
import SignupForm from './signupForm.js'
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
      fetch('/mailchimp', {
        method: 'POST',
        body: JSON.stringify(email),
        headers:{ 'Content-Type': 'application/json' }
      }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
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
            <br />
            <p>The newsletter is a <em>monthly subsciption</em> to the most heartfelt resources for the spiritual scientist, authored by yours truly and perhaps eventually a community of earnest seekers.</p>
            <br />
            <p>Sign up below for consistently life altered/ing content that will help you transmute the matrix and access your creative potential as a <b>spiritual being</b> having a <em>human experience</em></p>
            <footer class="section">
              <SignupForm />
            </footer>
          </section>
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
