import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';

import{
  BrowserRouter,
  Routes,
  Route,              //used for specifying path and jsx file to be rendered at that path
}from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
