import './App.css';

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
