import {useState} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderImage from '../SliderImage'
import './index.css'

const profileImages = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687701788/Screenshot_294_jfks15.png',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687941555/1680813141-GettyImages-850154658copy_pbydkh.webp',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687941923/download_2_vtjlrf.jpg',
  },
  {
    id: 4,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687941583/download_jhot47.jpg',
  },
  {
    id: 5,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687941923/download_3_kvo9rv.jpg',
  },
]

const profilesData = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687701788/Screenshot_294_jfks15.png',
    content:
      '1-Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687941555/1680813141-GettyImages-850154658copy_pbydkh.webp',
    content:
      '2-Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687941923/download_2_vtjlrf.jpg',
    content:
      '3-Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut',
  },
  {
    id: 4,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687941583/download_jhot47.jpg',
    content:
      '4-Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut',
  },
  {
    id: 5,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687941923/download_3_kvo9rv.jpg',
    content:
      '5-Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut',
  },
]

const ProfilesComponent = () => {
  const [profileId, setProfileId] = useState(1)

  const onChangeProfile = id => {
    setProfileId(id)
  }
  console.log(profileId)
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    adaptiveHeight: true,
  }

  const clickedElement = profilesData[profileId - 1]
  console.log(clickedElement)

  return (
    <div className="profiles-container">
      <h1 className="heading-2">dolor sit amet,</h1>
      <div className="profile-slider">
        <div className="card-container">
          <img
            src={clickedElement.imageUrl}
            alt="profile"
            className="profile-img"
          />
          <p className="profile-content">{clickedElement.content}</p>
        </div>
        <div className="slider-con">
          <Slider {...settings}>
            {profileImages.map(each => (
              <SliderImage
                details={each}
                key={each.id}
                onChangeProfile={onChangeProfile}
                isActive={each.id === profileId}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ProfilesComponent
