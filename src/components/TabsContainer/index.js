import {Component} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {BsArrowRight} from 'react-icons/bs'
import {IoMdMail, IoMdCall} from 'react-icons/io'
import {MdLocationOn} from 'react-icons/md'
import {ImTwitter} from 'react-icons/im'
import {GrFacebookOption} from 'react-icons/gr'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import CarouselItem from '../CarouselItem'
import BlogItem from '../BlogItem'
import BlogTab from '../BlogTab'
import TabItem from '../TabItem'
import './index.css'
import ProfilesComponent from '../ProfilesComponent'
import ChronoComponent from '../ChronoComponent'
import MeetingSection from '../MeetingSection'

const tabsList = [
  {
    id: 1,
    tabText: 'Ut wisi enim ad minim-1',
  },
  {
    id: 2,
    tabText: 'Ut wisi enim ad minim-2',
  },
  {
    id: 3,
    tabText: 'Ut wisi enim ad minim-3',
  },
  {
    id: 4,
    tabText: 'Ut wisi enim ad minim-4',
  },
]

const blogTabs = [
  {
    id: 1,
    tab: 't-1',
  },
  {
    id: 2,
    tab: 't-2',
  },
  {
    id: 3,
    tab: 't-3',
  },
  {
    id: 4,
    tab: 't-4',
  },
  {
    id: 5,
    tab: 't-5',
  },
]

const tabsContent = [
  {
    id: 1,
    title: 'dolor sit amet',
    content:
      'lorem ipsum selecno dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut ',
  },
  {
    id: 2,
    title: 'dolor sit amet-2',
    content:
      'lorem ipsum selecno dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut ',
  },
  {
    id: 3,
    title: 'dolor sit amet-3',
    content:
      'lorem ipsum selecno dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut ',
  },
  {
    id: 4,
    title: 'dolor sit amet-4',
    content:
      'lorem ipsum selecno dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut ',
  },
]

const carouselData = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687709143/Screenshot_292_y4szta.png',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl utlobortis nisl ut ',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687709143/Screenshot_292_y4szta.png',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl utlobortis nisl ut ',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687709143/Screenshot_292_y4szta.png',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl utlobortis nisl ut ',
  },
  {
    id: 4,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687709143/Screenshot_292_y4szta.png',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl utlobortis nisl ut ',
  },
  {
    id: 5,
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687709143/Screenshot_292_y4szta.png',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl utlobortis nisl ut ',
  },
]

const blogsData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet-1,',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorpe suscipit lobortis nisl ut',
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687670119/Screenshot_291_eaeg0d.png',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet-2,',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorpe suscipit lobortis nisl ut',
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687670119/Screenshot_291_eaeg0d.png',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet-3,',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorpe suscipit lobortis nisl ut',
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687670119/Screenshot_291_eaeg0d.png',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet-4,',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorpe suscipit lobortis nisl ut',
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687670119/Screenshot_291_eaeg0d.png',
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet-5,',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorpe suscipit lobortis nisl ut',
    imageUrl:
      'https://res.cloudinary.com/dblkpyaej/image/upload/v1687670119/Screenshot_291_eaeg0d.png',
  },
]

class TabsContainer extends Component {
  state = {activeTabId: 1, activeBlogTabId: 1}

  onChangeTab = id => {
    this.setState({activeTabId: id})
  }

  changeBlogTab = id => {
    this.setState({activeBlogTabId: id})
  }

  render() {
    const {activeTabId, activeBlogTabId} = this.state
    const filteredItem = tabsContent.filter(each => each.id === activeTabId)[0]
    const filteredBlogItem = blogsData.filter(
      each => each.id === activeBlogTabId,
    )

    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      speed: 500,
      adaptiveHeight: true,
      className: 'inner',
      draggable: true,
      initialSlide: 3,
      swipeToSlide: true,
      touchMove: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

    return (
      <>
        <ul className="blogs-list">
          {blogTabs.map(each => (
            <BlogTab
              details={each}
              key={each.id}
              changeBlogTab={this.changeBlogTab}
              tabActive={each.id === activeBlogTabId}
            />
          ))}
        </ul>
        <div className="blog-tab-details">
          {filteredBlogItem.map(each => (
            <BlogItem blogDetails={each} key={each.id} />
          ))}
        </div>
        <div className="tab-main-container">
          <h1 className="tab-main-heading">dollar sit amet,</h1>
          <ul className="tabs-container">
            {tabsList.map(each => (
              <TabItem
                details={each}
                key={each.id}
                onChangeTab={this.onChangeTab}
                isActive={activeTabId === each.id}
              />
            ))}
          </ul>
        </div>

        <hr className="horizontal" />

        <div className="tab-content">
          <h1 className="tab-heading">{filteredItem.title}</h1>
          <p className="content">{filteredItem.content}</p>
          <div className="arrow-container">
            <h1>Learn more</h1>
            <BsArrowRight className="arrow" />
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {carouselData.map(each => (
              <CarouselItem details={each} key={each.id} />
            ))}
          </Slider>
        </div>
        <ChronoComponent />
        <ProfilesComponent />
        <MeetingSection />
        <div className="bottom-container">
          <div className="box-container">
            <div className="box">
              <h1 className="head">Lorem Ipsum</h1>
              <div>
                <div className="call-container">
                  <button type="button" className="call-button">
                    {' '}
                    <IoMdMail className="call-icon" />
                  </button>

                  <p className="para-1">Lorem Ipsum</p>
                </div>
                <div className="call-container">
                  <button type="button" className="call-button">
                    {' '}
                    <IoMdCall className="call-icon" />
                  </button>
                  <p className="para-1">Lorem Ipsum</p>
                </div>
                <div className="call-container">
                  <button type="button" className="call-button">
                    {' '}
                    <MdLocationOn className="call-icon" />
                  </button>
                  <p className="para-1">consectetuer </p>
                </div>

                <p className="para">adipiscing elit, </p>
              </div>
            </div>
            <div className="box">
              <h1 className="head">Lorem Ipsum</h1>
              <div>
                <p className="para">Lorem Ipsum</p>
                <p className="para">Lorem Ipsum</p>
                <p className="para">Lorem Ipsum</p>
                <p className="para">Lorem Ipsum</p>
              </div>
            </div>
            <div className="box">
              <h1 className="head">Lorem Ipsum</h1>
              <div>
                <p className="para">Lorem Ipsum</p>
                <p className="para">Lorem Ipsum</p>
                <p className="para">Lorem Ipsum</p>
                <p className="para">Lorem Ipsum</p>
              </div>
            </div>
            <div className="box">
              <h1 className="head">Lorem Ipsum</h1>
              <div>
                <p className="para">Lorem Ipsum</p>
                <p className="para">Lorem Ipsum</p>
                <p className="para">Lorem Ipsum</p>
                <p className="para">Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="media-container">
            <button type="button" className="facebook-button">
              <GrFacebookOption className="icon" />
            </button>
            <button type="button" className="facebook-button">
              <ImTwitter className="icon" />
            </button>
            <button type="button" className="facebook-button">
              <FaLinkedinIn className="icon" />
            </button>
            <button type="button" className="facebook-button">
              <FiInstagram className="icon" />
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default TabsContainer
