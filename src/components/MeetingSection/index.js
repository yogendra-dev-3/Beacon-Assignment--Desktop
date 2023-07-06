import {useState} from 'react'
import {BsArrowRight} from 'react-icons/bs'
import SmallImage from '../SmallImage'
import './index.css'

const smallImagesList = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687719774/Screenshot_295_x8ktdu.png',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687719774/Screenshot_295_x8ktdu.png',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687719774/Screenshot_295_x8ktdu.png',
  },
]

const meetingItemsList = [
  {
    imageId: 1,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687719774/Screenshot_295_x8ktdu.png',
    head: 'Lorem ipsum dolor sit amet-1,',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper  suscipit lobortis nisl ut',
  },
  {
    imageId: 2,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687719774/Screenshot_295_x8ktdu.png',
    head: 'Lorem ipsum dolor sit amet-2,',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper  suscipit lobortis nisl ut',
  },
  {
    imageId: 3,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687719774/Screenshot_295_x8ktdu.png',
    head: 'Lorem ipsum dolor sit amet-3,',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper  suscipit lobortis nisl ut',
  },
]

const MeetingSection = () => {
  const [imageId, setImageId] = useState(1)

  const onChangeImage = id => {
    setImageId(id)
  }
  const meetingItem = meetingItemsList[imageId - 1]
  const {imageUrl, head, content} = meetingItem
  return (
    <div className="meeting-container">
      <img src={imageUrl} alt="meeting img" className="meeting-image" />
      <div className="meeting-content-container">
        <h1 className="meeting-head">{head}</h1>
        <p className="meeting-content">{content}</p>
        <ul className="small-images-container">
          {smallImagesList.map(each => (
            <SmallImage
              details={each}
              key={each.id}
              onChangeImage={onChangeImage}
              activeImage={each.id === imageId}
            />
          ))}
          <button type="button" className="meeting-button">
            Learn More <BsArrowRight className="meeting-arrow" />
          </button>
        </ul>
      </div>
    </div>
  )
}

export default MeetingSection
