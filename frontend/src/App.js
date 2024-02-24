/*import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import ItemList from './components/ItemList';
import Login from './components/Login';
import Signup from './components/Signup';
import TodoList from "./components/TodoList";
//import AddItem from './components/AddItem';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {

  }, []);

  const handleLogout = () => {

  };

  return (

      <Router>
        <div>
          <div className="app">
            <nav>
              <ul>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="/TodoList">Todo List</Link>
                </li>
                {user ? (
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                ) : (
                    <>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/signup">Signup</Link>
                      </li>
                    </>
                )}
              </ul>
            </nav>

            <Routes>
              <Route path="/login" element={<Login setUser={setUser}/>}/>
              <Route path="/signup" element={<Signup setUser={setUser}/>}/>
              <Route path="/todoList" element={<TodoList/>}/>

            </Routes>
          </div>

        </div>
      </Router>
  );
};
export default App;*/

import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import ItemList from './components/ItemList';
import Login from './components/Login';
import Signup from './components/Signup';
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
//import AddItem from './components/AddItem';

const App = () => {


  useEffect(() => {

  }, []);


  return (

      <div>
        <Navbar/>
      </div>
  );
};
export default App;