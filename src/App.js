import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path={"/"} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
