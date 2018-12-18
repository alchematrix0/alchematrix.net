import React, { Component} from 'react';
import PropTypes from 'prop-types';
import MailchimpSubscribe from 'react-mailchimp-subscribe'
const url = 'https://alchematrix.us7.list-manage.com/subscribe/post?u=3e8bbf83c6c989a58748b4a27&amp;id=a2476a44ec'

const CustomForm = ({ status, message, onValidated}) => {
  let email;
  const submit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if(
      email &&
      email.value.indexOf('@') > -1
    ){
      onValidated({
        EMAIL: email.value
      })
    }
  }
  return (
    <form className='signup__form' onSubmit={submit}>
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && <div style={{ color: 'red' }}>{message}</div>}
      {status === 'success' && <div style={{ color: 'green' }}>Thanks!</div>}
      {!(status === 'success') && (
        <div className="field has-addons">
          <div className="control is-expanded">
          <input
            className="input is-primary signup__email"
            type="email"
            ref={node => (email = node)}
            required="true"
            name="email"
            placeholder="Your email goes here"
          />
          </div>
          <div className="control">
            <button type="submit" class="signup__btn button is-info">I'm in</button>
          </div>
        </div>
        )}
    </form>
  )
}
const SignupForm = ({ data }) => {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  )
}
SignupForm.propTypes = {
  data: PropTypes.object.isRequired
}
export default SignupForm;
