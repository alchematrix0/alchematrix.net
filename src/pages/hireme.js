import React from "react"
import Layout from "../components/layout"

const HireMe = () => {
  const offerings = [
    {description: "Business Card Website", timeline: "1 week", price: "$150", example: "Flight of Phantoms", link: "https://desforets.github.io/flightofphtms/"},
    {description: "Website w/ contact form", timeline: "2 weeks", price: "$275", example: "PoCake Landing", link: "https://pocake.netlify.com"},
    {description: "E-commerce website", timeline: "4 weeks", price: "$500", example: "Earthsun Organics", link: "https://www.earthsun.ca"},
    {description: "Single Page App", timeline: "2 weeks", price: "$375", example: "Farmer Resource Database", link: "https://www.lillooetagricultureandfood.org/farmer-resource-database/" },
    {description: "Single Page App w/ Purchases", timeline: "4 weeks", price: "$600", example: "PoCake", link: "https://pocake.alchematrix.net"},
    {description: "Platform Economy App", timeline: "8 weeks", price: "$2,500", example: "Taski", link: "https://www.taskiapp.com"},
    {description: "Education", timeline: "Hourly", price: "$100", example: "MD5", link: "https://desforets.github.io/md5/"},
    {description: "Existing project (bugs, features, deployment, security)", timeline: "Hourly", price: "$100", example: "JTF Canada Migration", link: "https://jtfcanada.com"}
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
    {name: "Marianne", org: "LAFS", project: "Farmer Resource Database", date: "1/10/2018", comment: "Works fast and communicates well. Brought my vision to life accurately and on budget. Definitely goes the extra mile."},
    {name: "Toby", org: "Lillooet Library", project: "Digital Literacy Workshop", date: "8/20/2016", comment: "Awesome and informative presentation, clearly delivered and surprisingly fun."},
    {name: "Peter", org: "EarthSun Organics", project: "EarthSun Wholesale Website", date: "1/12/2018", comment: "Got the work done faster than we thought and provided ongoing support at a reasonable rate."},
    {name: "Rishabh", org: "Taski", project: "Platform Economy Web App", date: "Ongoing", comment: "We could not find a project challenging enough for this guy. Throw anything at him, he'll figure it out!"}
  ]
  const Testimonial = (props) => (
    <div className="column is-one-quarter">
      <div class="card" style={{maxWidth: "400px", display: "inline-block"}}>
        <div class="card-content">
          <p class="title is-4">{props.data.comment}</p>
          <p class="subtitle"><em>{props.data.name} <small>({props.data.org})</small></em></p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              {props.data.project}
            </span>
          </p>
          <p class="card-footer-item">
            <span>
              {props.data.date}
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
          {testimonials.map(t => (<Testimonial data={t} />))}
        </div>
      </section>
  	</Layout>
	);
};

export default HireMe
