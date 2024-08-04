// Write your code here
import './index.css'

const AppItem = props => {
  const {currentApp} = props

  return (
    <button key={currentApp.tabId}>
      <li key={currentApp.appId} className="li__apps app__item__container">
        <img
          key={currentApp.tabId}
          src={currentApp.imageUrl}
          alt={currentApp.appName}
          className="app__img"
        />
        <p key={currentApp.tabId}>{currentApp.appName}</p>
      </li>
    </button>
  )
}

export default AppItem
