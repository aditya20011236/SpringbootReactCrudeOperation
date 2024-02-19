
import './App.css';
import Navbar from './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Adduser from './users/Adduser';
import EditUser from './users/Edituser';
function App() {
  return (
    <div className="App">
    <Router>
    <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='adduser' element={<Adduser></Adduser>} ></Route>
      <Route path='/edituser/:id' element={<EditUser></EditUser>} ></Route>
     </Routes>
    </Router>
    </div>
  );
}

export default App;
