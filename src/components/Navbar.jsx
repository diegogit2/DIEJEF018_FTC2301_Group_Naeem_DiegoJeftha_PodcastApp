

export default function Navbar() {
  return (
    <nav className="nav-bar">

      <div className="logo-title">
        <img src="./src/images/podcast.png" width="40px" height="40px" className="podcast-nav-logo" />
        <h3>WATCHCAST</h3>
      </div>

      <div className="nav-items">
        <ul>    
          <li>
            <img src="./src/images/magnifier.png" width="30px" height="30px" className="podcast-nav-search" />
          </li>
          <li>
            <img src="./src/images/setting.png" width="30px" height="30px" className="podcast-nav-search" />
          </li>
          <li>
            <img src="./src/images/user.png" width="30px" height="30px" className="podcast-nav-user" />
          </li>
        </ul>
      </div>

    </nav>
  );
}
