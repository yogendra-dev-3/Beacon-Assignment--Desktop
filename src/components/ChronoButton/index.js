import './index.css'

const ChronoButton = props => {
  const {details, changeButton, makeActive} = props
  const {id} = details

  const content = `0${id}`
  console.log(makeActive)

  const activateButton = makeActive ? 'active-chrono-button' : 'chrono-btn'
  console.log(activateButton)

  const onClickButton = () => {
    changeButton(id)
  }

  return (
    <li>
      <button type="button" className={activateButton} onClick={onClickButton}>
        {content}
      </button>
    </li>
  )
}

export default ChronoButton
