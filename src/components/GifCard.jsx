import { PropTypes } from "prop-types"

import './GifCard'

export const GifCard = ({ id, title, image }) => {
  return (
    <div className="container-card">
      <img className="image-card" src={image} alt={title} />
      <div className="card-container">
        <p>{title}</p>
      </div>
    </div>
  )
}

GifCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
