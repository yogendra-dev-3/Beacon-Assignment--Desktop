import {IoMdMail, IoMdCall} from 'react-icons/io'
import './index.css'

const Header = () => (
  <div className="header">
    <img
      src="https://res.cloudinary.com/dblkpyaej/image/upload/v1687626873/Screenshot_288_oxq6kv.png"
      alt="beacon logo"
      className="beacon-logo"
    />
    <div className="information-container">
      <div className="phone-no">
        <button className="message-button" type="button">
          <IoMdMail className="message-icon" />
        </button>
        <h2>8688380615</h2>
      </div>
      <div className="phone-no">
        <button className="message-button" type="button">
          <IoMdCall className="message-icon" />
        </button>
        <h2>yogendrayogi330@gmail.com</h2>
      </div>
    </div>
  </div>
)

export default Header
