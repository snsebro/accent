import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/hompage/Homepage';
import PromoBanner from './components/promo-banner/PromoBanner'
import NavBar from './components/nav-bar/NavBar'
import './App.css';

const App = () => {
  return (
    <div className="app">
      <PromoBanner />
      <NavBar />
      <Switch>
        <Route path='/' component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
