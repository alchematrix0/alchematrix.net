import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Lyrics from "../components/Lyrics"
import { FiDownload } from 'react-icons/fi'

class Music extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 2
    }
  }
  render () {
    const songs = this.props.data.allFile.edges.map((file, index) => Object.assign({}, {
      file: file.node.publicURL,
      title: file.node.name.substring(file.node.name.indexOf('_') + 1),
      key: file.node.name.charAt(0)
    })).sort((a, b) => a.key - b.key)
    const TableRow = (props) => {
      return (
        <tr>
          <td>{props.index + 1}</td>
          <td>{props.data.title}</td>
          <td>
            <audio controls src={`${props.data.file}`}>
              Cannot play :(
            </audio>
          </td>
          <td>
            {props.data.title !== 'Tangled' ? <a href={`#${props.data.title}`}>Lyrics</a> : null}
          </td>
          <td>
            <a href={props.data.file} download>
              <span className="icon">
                <FiDownload />
              </span>
            </a>
          </td>
        </tr>
      )
    }
    return (
      <Layout>
        <h1 className="title is-spaced">Music</h1>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Play</th>
              <th>Words</th>
              <th>DL</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((o, index) => (<TableRow key={index} index={index} data={o} />))}
          </tbody>
        </table>
        <section>
          <Lyrics selected={this.state.selected} />
        </section>
      </Layout>
    );
  }
};

export const query = graphql`
	query Tracks
    {
      allFile(filter: { extension: { eq: "mp3" } }) {
        edges {
          node {
            publicURL,
            name
          }
        }
      }
    }
  `

export default Music
