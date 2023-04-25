import { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>List of Users</h1>
      <ul className="user-list">
        {listOfUsers.map(user => (
          <li key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p className="user-email">{user.email}</p>
            <p className="user-phone">{user.phone}</p>
            <p className="user-website">{user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;