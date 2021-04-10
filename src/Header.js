import './Header.css';

function Header() {
  return (
    <div className="Header">
      <header>
            <nav className="nav">
                <ul className="nav__list">
                    <li><a href="#home"><i className="fas fa-home"></i></a></li>
                    <li><a href="#about"><i className="fas fa-user"></i></a></li>
                    <li><a href="#college"><i className="fas fa-university"></i></a></li>
                    <li><a href="#certificates"><i className="fas fa-certificate"></i></a></li>
                    <li><a href="#personal"><i className="fas fa-project-diagram"></i></a></li>
                </ul>            
                </nav>
      </header>
    </div>
  );
}

export default Header;
