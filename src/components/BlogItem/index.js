import {BsArrowRight} from 'react-icons/bs'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, content, imageUrl} = blogDetails

  const blogHeading = `blog-heading-${id}`

  return (
    <>
      <li className="list">
        <div className="blog-item">
          <div className="blog-content">
            <h1 className={blogHeading}>{title}</h1>
            <p className="blog-text">{content}</p>
          </div>
          <img src={imageUrl} alt="blog img" className="blog-image" />
        </div>
        <div className="arrow-container">
          <h1>Learn more</h1>
          <BsArrowRight className="arrow" />
        </div>
      </li>
    </>
  )
}

export default BlogItem
