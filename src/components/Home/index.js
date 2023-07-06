import Header from '../Header'
import TabsContainer from '../TabsContainer'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="bg-container">
        <h1 className="heading">Lorem ipsum dolar sit amet,</h1>
        <div className="buttons-container">
          <h1 className="book-demo">Book A Demo</h1>
          <h1 className="book-demo">watch video</h1>
        </div>
      </div>
    </div>
    <TabsContainer />
  </>
)

export default Home
