import './GifCard.css'

const GifCard = ({ gif }) => {
  const { id, title, image } = gif;

  return (
    <div className="container-card">
      <img className="image-card" src={image} alt={id} />
      <div className="card-container">
        <p>{title}</p>
      </div>
    </div>
  )
}

export { GifCard }