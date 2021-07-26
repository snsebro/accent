import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/hompage/Homepage';
import PromoBanner from './components/promo-banner/PromoBanner'
import NavBar from './components/nav-bar/NavBar'
import Shop from './pages/shop/Shop';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <PromoBanner />
      <NavBar />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
