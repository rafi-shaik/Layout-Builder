// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderLeftNavbar = () => (
        <div className="left-navbar">
          <h1 className="heading">Left Navbar Menu</h1>
          <ul className="list-items">
            <li className="item">Item 1</li>
            <li className="item">Item 2</li>
            <li className="item">Item 3</li>
            <li className="item">Item 4</li>
          </ul>
        </div>
      )

      const renderContent = () => (
        <div className="content">
          <h1 className="heading">Content</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            auctor felis mi, at vestibulum ante sollicitudin ut. Donec pulvinar
            tortor arcu, ut rutrum arcu cursus eget. Fusce mollis nibh et
            hendrerit hendrerit.
          </p>
        </div>
      )

      const renderRightNavbar = () => (
        <div className="right-navbar">
          <h1 className="heading">Right Navbar</h1>
          <div className="ad-box-container">
            <p className="ad-box">Ad 1</p>
            <p className="ad-box">Ad 2</p>
          </div>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar && renderLeftNavbar()}
          {showContent && renderContent()}
          {showRightNavbar && renderRightNavbar()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
