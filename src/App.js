import React from 'react';
import './App.css';
import Header from './componentts/Header';
import Navbar from './componentts/nav';
import Profile from './componentts/Profile';
function App() {
  return (
    <div className='app-wrapper'>
     <Header />
     <Navbar />
     <Profile />

</div>
  )
}
export default App;
