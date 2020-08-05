import React from "react"
import Layout from "../components/layout"
import { FiLinkedin, FiGithub } from "react-icons/fi"
import { FaStackOverflow, FaSpotify, FaAngellist } from "react-icons/fa"

const HireMe = () => {
  const offerings = [
    {description: "Business Card Website", timeline: "1 week", price: "$150", example: "Flight of Phantoms", link: "https://desforets.github.io/flightofphtms/"},
    {description: "Website w/ contact form", timeline: "2 weeks", price: "$275", example: "PoCake Landing", link: "https://pocake.netlify.com"},
    {description: "E-commerce website", timeline: "4 weeks", price: "$500", example: "Earthsun Organics", link: "https://www.earthsun.ca"},
    {description: "Single Page App", timeline: "2 weeks", price: "$375", example: "Farmer Resource Database", link: "https://www.lillooetagricultureandfood.org/farmer-resource-database/" },
    {description: "Single Page App w/ Purchases", timeline: "4 weeks", price: "$600", example: "PoCake", link: "https://pocake.alchematrix.net"},
    {description: "Platform Economy App", timeline: "8 weeks", price: "$2,500", example: "Taski", link: "https://www.taskiapp.com"},
    {description: "Education", timeline: "Hourly", price: "$80", example: "MD5", link: "https://desforets.github.io/md5/"},
    {description: "Existing project (bugs, features, deployment, security)", timeline: "Hourly", price: "$60", example: "JTF Canada Website Migration", link: "https://jtfcanada.com"}
  ]
  const TableRow = (props) => (
    <tr>
      <td>{props.data.description}</td>
      <td>{props.data.timeline}</td>
      <td>{props.data.price}</td>
      <td><a alt={props.data.description} target="blank" rel="noopener noreferrer" href={props.data.link}>{props.data.example}</a></td>
    </tr>
  )
  const testimonials = [
    { name: "Toby", org: "Lillooet Library", project: "Digital Literacy Workshop", date: "8/20/2016", comment: "Awesome and informative presentation, clearly delivered and surprisingly fun." },
    { name: "Peter", org: "EarthSun", project: "Wholesale E-commerce", date: "1/12/2017", comment: "Got the work done faster than we thought and provided ongoing support at a reasonable rate." },
    { name: "Marianne", org: "LAFS", project: "Farmer Resource Database", date: "1/6/2018", comment: "Works fast and communicates well. Brought my vision to life accurately and on budget. Definitely goes the extra mile." },
    { name: "Rishabh", org: "Taski", project: "Platform Economy Web App", date: "Ongoing", comment: "We could not find a project challenging enough for this guy. Throw anything at him, he'll figure it out!" },
    { name: "Seb", org: "Ora Organic", project: "Referral Program", date: "1/03/2019", comment: "Highly skilled, incredibly responsive, worked quickly, precisely, and very independently. A pleasure to work with; would recommend him for any role with the technical or non-technical side of the business." }
  ]
  const Testimonial = ({ testimonial }) => (
    <div className={`column ${testimonial.name === "Seb" ? "is-full" : "is-half"}`}>
      <div class="card" style={{display: "inline-block"}}>
        <div class="card-content">
          <p class="title is-5">{testimonial.comment}</p>
          <p class="subtitle"><em>{testimonial.name} <small>-- {testimonial.org}</small></em></p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              {testimonial.project}
            </span>
          </p>
          <p class="card-footer-item">
            <span>
              {testimonial.date}
            </span>
          </p>
        </footer>
      </div>
    </div>
  )
	return (
		<Layout>
      <h1 className="title is-spaced">Work with me</h1>
      <h2 className="subtitle is-spaced">Bring your project and vision online FAST without overpaying</h2>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Description</th>
            <th>Timeline</th>
            <th>Price</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {offerings.map((o, index) => (<TableRow key={index} data={o} />))}
        </tbody>
      </table>
      <section>
        <h1 className="title is-spaced" style={{marginTop: "2em"}}>Testimonials</h1>
        <div className="columns is-multiline">
          {testimonials.map(t => (<Testimonial testimonial={t} />))}
        </div>
      </section>
      <section>
        <div className="columns is-centered is-mobile" style={{marginTop: "4em"}}>
          <div className="column is-1">
            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/alchematrix0" className="button is-light">
              <span className="icon"><FiLinkedin /></span>
            </a>
          </div>
          <div className="column is-1">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/alchematrix0" className="button is-light">
              <span className="icon"><FiGithub /></span>
            </a>
          </div>
          <div className="column is-1">
            <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/5691584/alphanumeric0101" className="button is-light">
              <span className="icon"><FaStackOverflow /></span>
            </a>
          </div>
          <div className="column is-1">
            <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/06xgxgcxwcj3fgtwdlx4tna1t" className="button is-light">
              <span className="icon"><FaSpotify /></span>
            </a>
          </div>
          <div className="column is-1">
            <a target="_blank" rel="noopener noreferrer" href="https://angel.co/michel_alexander" className="button is-light">
              <span className="icon"><FaAngellist /></span>
            </a>
          </div>
        </div>
      </section>
  	</Layout>
	);
};

export default HireMe
