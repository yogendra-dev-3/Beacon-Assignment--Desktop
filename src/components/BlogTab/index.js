import './index.css'

const BlogTab = props => {
  const {details, changeBlogTab, tabActive} = props
  const {id} = details

  const active = tabActive ? 'active-blog-tab' : `tab-${id}`

  const onChangeTab = () => {
    changeBlogTab(id)
  }
  const content = ''
  return (
    <li className={active} onClick={onChangeTab}>
      {content}
    </li>
  )
}

export default BlogTab
