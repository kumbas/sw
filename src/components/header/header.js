import logo from '../../images/header/logo.svg'
import Menu from '../menu/menu'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Link to="/" className="d-inline-block">
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>
          <div className="col-6 d-flex">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
