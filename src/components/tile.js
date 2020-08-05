import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import defaultImage from '../images/crescent-sun.png'

import './bulma.scss'

const Tile = ({ props }) => {
  return (
    <div className='column is-4'>
      <div className='card'>
        <Link to={props.path} style={{ textDecoration: `none`, color: `inherit` }}>
          <div className='card-image'>
            <figure className='image is-4by4'>
              {
                props.image && props.image.childImageSharp ?
                  (<Img sizes={props.image.childImageSharp.sizes} />) :
                  (<img src={defaultImage} alt='placeholder' />)
              }
            </figure>
          </div>
        </Link>
        <div className='card-content'>
          <div className='media'>
            <div className='media-content'>
              <p className='title is-4'>
                <Link to={props.path} style={{ textDecoration: `none`, color: `inherit` }}>{props.title}</Link>
              </p>
              {props.subject && <p className="subtitle">Series: {props.subject}</p>}
            </div>
          </div>

          <div className='content'>
            {props.excerpt}
            <br />
            <span className='tags'>
              {props.tags.map(tag => (<a key={props.date + tag} href='#!'><small>#{tag}</small></a>))}
            </span>
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
