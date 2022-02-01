import React from "react";
import Navbar from './Navbar';
import Badge from './Badge';
import Bio from './Bio';
import Feed from './Feed'
import FriendList from './FriendList';

function App() {
  let columns = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginLeft: '350px',
    marginRight: '50px',
  }
  return (
    <div>
      <Navbar/>
      <div style={columns}>
        <div>
          <Feed/>
        </div> 
      </div>
    </div>
  );
}

export default App;