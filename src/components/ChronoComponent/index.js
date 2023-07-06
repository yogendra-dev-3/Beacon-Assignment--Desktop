import {useState} from 'react'
import {BsArrowRight} from 'react-icons/bs'
import ChronoButton from '../ChronoButton'
import './index.css'

const chronoButtons = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
]

const cardData = [
  {
    id: 1,
    heading: 'Lorem ipsum dolor sit amet,',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut',
  },
  {
    id: 2,
    heading: 'lorem ipsum dolor sit amet 2',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut',
  },
  {
    id: 3,
    heading: 'lorem ipsum dolor sit amet 3',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut',
  },
]

const ChronoComponent = () => {
  const [buttonId, setButtonId] = useState(2)

  const changeButton = id => {
    setButtonId(id)
  }
  const cardEl = cardData[buttonId - 1]

  return (
    <div className="chrono-container">
      <ul className="chrono-buttons">
        {chronoButtons.map(each => (
          <ChronoButton
            details={each}
            key={each.id}
            changeButton={changeButton}
            makeActive={each.id === buttonId}
          />
        ))}
      </ul>
      <div className="chrono-content">
        <h1 className="main-head">Step</h1>
        <h2 className="head-2">{cardEl.heading}</h2>
        <p className="chrono-item-text">{cardEl.content}</p>
        <div className="arrow-container">
          <h2>Learn more</h2>
          <BsArrowRight className="arrow" />
        </div>
      </div>
    </div>
  )
}

export default ChronoComponent
