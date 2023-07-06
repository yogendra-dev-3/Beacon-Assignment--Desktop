import './index.css'

const SliderImage = props => {
  const {details, onChangeProfile, isActive} = props
  const {id, imageUrl} = details

  const changeId = () => {
    onChangeProfile(id)
  }

  const className = isActive ? 'active-slider-image' : 'slider-image'
  console.log(isActive)

  return (
    <li>
      <img
        src={imageUrl}
        alt="slider"
        className={className}
        onClick={changeId}
      />
    </li>
  )
}

export default SliderImage
