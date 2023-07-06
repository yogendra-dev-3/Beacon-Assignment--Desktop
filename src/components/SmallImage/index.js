import './index.css'

const SmallImage = props => {
  const {details, onChangeImage, activeImage} = props
  const {id, imageUrl} = details

  const imageClass = activeImage ? 'active-small-image' : 'small-image'

  const onClickImage = () => {
    onChangeImage(id)
  }

  return (
    <li onClick={onClickImage}>
      <img src={imageUrl} alt="small img" className={imageClass} />
    </li>
  )
}

export default SmallImage
