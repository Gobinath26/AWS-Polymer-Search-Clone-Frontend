import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Components/home';
import CardData from './Components/cardData';
function App() {
  return (
    <div className="App">
      <div>
     <Navbar/>
     <Switch>
       <Route exact path="/">
        <Home/>
        <CardData/>
       </Route>
     </Switch>
     </div>
    </div>
  );
}

export default App;
