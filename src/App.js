import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
 
function App() {
  return(
    <Router>
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='profile' element={<Home />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
