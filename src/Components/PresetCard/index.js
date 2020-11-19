import { Link } from "gatsby"
import React from "react"
import "./styles.scss"

const PresetCard = ({ image, title, price, link }) => {
  return (
    <div className="card">
      <Link to={link}>
        <img src={image} alt={title} />
      </Link>
      <div className="card-container">
        <h4>{title}</h4>
        <hr />
        <div className="card-price-addcart">
          <p>${price}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default PresetCard
