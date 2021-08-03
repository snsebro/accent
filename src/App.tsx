import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/hompage/Homepage';
import PromoBanner from './components/promo-banner/PromoBanner'
import NavBar from './components/nav-bar/NavBar'
import Shop from './pages/shop/Shop';
import './App.css';
import ProductDetail from './pages/product-detail/ProductDetail';
import Login from './pages/login/Login';

const App = () => {
  return (
    <div className='app'>
      <PromoBanner />
      <NavBar />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/shop/:id' component={ProductDetail}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
