import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import TodoList from "./TodoList";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const handleLogout = () => {

    };
    return (
        <nav>
            <Router>
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
                </div>
                <Routes>
                    <Route path="/login" element={<Login setUser={setUser}/>}/>
                    <Route path="/signup" element={<Signup setUser={setUser}/>}/>
                    <Route path="/todoList" element={<TodoList/>}/>
                </Routes>
            </Router>
        </nav>
    );
};

export default Navbar;
