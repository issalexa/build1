import './App.css';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Project from './Project';
import { BrowserRouter as BrowserRouter, Route, Link } from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div className="sans-serif">
      <Route path="/" exact strict component={SignUp} />
      <Route path="/login" exact strict component={LogIn} />
      <Route path="/project" exact strict component={Project} />
    </div>
  </BrowserRouter>
    </div>
  );
}

export default App;
