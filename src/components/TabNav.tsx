
const TabNav = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bottom-nav">
    <button
      className={`nav-button ${activeTab === 'home' ? 'active' : ''}`}
      onClick={() => setActiveTab('home')}
    >
      Home
    </button>
    {/* <button
      className={`nav-button ${activeTab === 'psalms' ? 'active' : ''}`}
      onClick={() => setActiveTab('psalms')}
    >
      Psalms
    </button> */}
    <button
      className={`nav-button ${activeTab === 'proverbs' ? 'active' : ''}`}
      onClick={() => setActiveTab('proverbs')}
    >
      Proverbs
    </button>
  </nav>

  )
}

export default TabNav