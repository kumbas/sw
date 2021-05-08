import ship from '../images/home/ship.jpg'
import jj from '../images/home/jj.webp'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="text-center">
      <h2 className="mb-5">Welcome to Star Wars game!</h2>
      <p>Please choose competitors to play:</p>
      <div>
      <Link to="/people" className="mx-5 d-inline-flex flex-column">
        People
        <img src={jj} alt="people" width="200" />
      </Link>
      <Link to="/starships" className="mx-5 d-inline-flex flex-column">
        Starships
        <img src={ship} alt="starships" width="200" className="my-4" />
      </Link>
      </div>
    </div>
  )
}

export default HomePage
