import './App.css';
import Header from './components/header/header'
import HomePage from './pages/index'
import PeoplePage from './pages/people'
import StarshipsPage from './pages/starships'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
        <Switch>
          <Route path="/people">
            <PeoplePage />
          </Route>
          <Route path="/starships">
            <StarshipsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
