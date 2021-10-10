import React, { useEffect, useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Cards';


const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=6')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data.results);
      });
  }, [])
  return (
    <>
      {users.map(user => (
        <Card
          image={user.picture.large}
          name={user.name.first + ' ' + user.name.last}
          email={user.email}
          gender={user.gender}
          nat={user.nat}
          age={user.dob.age}
          
        />
      ))}
    </>
  );
}

export default App;
