import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="align-self-center">
      <ul className="list-unstyled m-0">
        <li className="d-inline-block p-2">
          <Link to="/" className="btn btn-outline-warning">Home</Link>
        </li>
        <li className="d-inline-block p-2">
          <Link to="/people" className="btn btn-outline-warning">People</Link>
        </li>
        <li className="d-inline-block p-2">
          <Link to="/starships" className="btn btn-outline-warning">Starships</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
