import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'

import './bulma.scss'

const Tile = ({props}) => {
  console.dir(props)
  return (
    <div className='column is-4'>
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-4by4'>
            <img src={props.image ? props.image.publicURL : 'https://bulma.io/images/placeholders/480x480.png'} alt='Placeholder' />
          </figure>
        </div>
        <div className='card-content'>
          <div className='media'>
            <div className='media-content'>
              <p className='title is-4'>
                <Link to={props.path} style={{ textDecoration: `none`, color: `inherit` }}>{props.title}</Link>
              </p>
              {props.subject && <p className="subtitle">{props.subject}</p>}
            </div>
          </div>

          <div className='content'>
            {props.excerpt}
            <br />
            <p className='subtitle is-6'>Posted by: @{props.author}</p>
            <time dateTime={props.date}>{props.date}</time>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tile;