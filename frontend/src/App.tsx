import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Routes>
            <Route path="/signin" element={ <SignIn/>}>
            </Route>
            <Route path="/signup" element={  <SignUp/>}>
            </Route>
          </Routes>
      </header>
    </div>
  );
}

export default App;
