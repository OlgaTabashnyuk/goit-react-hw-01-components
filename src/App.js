// import './App.css';
import React from 'react';
import SocialProfile from "./components/SocialProfile/SocialProfile"
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"
import user from './store/user.json';
import friends from './store/friends.json' 
import statisticalData from "./store/statistical-data.json";
import transactions from './store/transactions.json';
import Container from "./components/Container/Container";



const App = () => {
  return (

    <div className="App">
<Container>
    <SocialProfile  
    avatar={user.avatar}
    name={user.name}
    tag={user.tag}
    location={user.location}
    stats={user.stats}
    /> 

  
  <Statistics 
    title="Upload stats" 
    stats={statisticalData} 
    />
  
  <FriendList friends={friends}
   />,

<TransactionHistory transactions={transactions} 
/>;
</Container>
  </div>
  );
}
export default App;
