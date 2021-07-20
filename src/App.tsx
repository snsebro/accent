import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/hompage/Homepage';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path='/' component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
