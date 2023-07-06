import './index.css'

const TabItem = props => {
  const {details, isActive, onChangeTab} = props
  const {id, tabText} = details

  const onClickTab = () => {
    onChangeTab(id)
  }
  const applyStyle = isActive ? 'active-tab' : ''
  return (
    <li className={`tab-item ${applyStyle}`} onClick={onClickTab}>
      <h1 className="tab-text">{tabText}</h1>
    </li>
  )
}

export default TabItem
