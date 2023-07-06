import './index.css'

const CarouselItem = props => {
  const {details} = props
  const {content, imageUrl} = details

  return (
    <li className="list-item">
      <img className="profile-image" src={imageUrl} alt="carousel img" />
      <p className="text">{content}</p>
    </li>
  )
}

export default CarouselItem
