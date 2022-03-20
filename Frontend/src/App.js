import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
   <Router>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
      </Routes>
   </Router>
  );
}

export default App;
