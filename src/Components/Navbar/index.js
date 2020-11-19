import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import "./styles.scss"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <nav>
      <div>
        <Link className="logo" to="/">
          {data.site.siteMetadata.title}
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/products">Presets</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart 🛍</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

// export const query = graphql`
//   {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//   }
// `
