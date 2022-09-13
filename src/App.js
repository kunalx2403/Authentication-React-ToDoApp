import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/index";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <Route path="/about"> //elements prop </Route>
        <Route path="/sign-up"> //elements prop </Route> */}
      </Router>
      <div className="todo-app">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
