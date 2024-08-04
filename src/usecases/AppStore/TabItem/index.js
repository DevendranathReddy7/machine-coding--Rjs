import './index.css'

const TabItem = props => {
  const {currentTab, clickedTab} = props

  const tabsHandler = id => {
    clickedTab(id)
  }
  return (
    <li
      key={currentTab.tabId}
      className="li__tabs"
      onClick={() => tabsHandler(currentTab.tabId)}
    >
      <button key={currentTab.tabId}>{currentTab.displayText}</button>
    </li>
  )
}

export default TabItem
