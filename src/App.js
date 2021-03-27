import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import Carousel from './Components/Carousel/Carousel';

import {Switch,Route,BrowserRouter} from "react-router-dom"
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
        <Route path="/" component={LandingPage} exact />
      </Switch>
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
