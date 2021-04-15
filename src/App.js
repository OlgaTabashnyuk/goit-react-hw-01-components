// import './App.css';
import Profile from "./components/Profile"
import React from 'react';
import user from './user.json';


const App = () => {
  return (
    <div className="App">
    <Profile  
    avatar={user.avatar}
    name={user.name}
    tag={user.tag}
    location={user.location}
    stats={user.stats}
    /> 
     </div>
  );
}
export default App;
