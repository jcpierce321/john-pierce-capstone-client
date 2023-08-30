import './UserList.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT || 8080;

function UserList () {
    const [users, setUsers] = useState(null); 

    useEffect(() => {
        axios
          .get(`${API_URL}:${PORT}/users`)
          .then((res) => {
            const usersData = res.data;
            setUsers(usersData);
    
            console.log(usersData);
          })
          .catch((error) => {
            console.error("Error fetching users:", error);
          });
      }, []);

      if (users === null) {
        return <h1>Loading...</h1>;
      }
    
      if (users.length === 0) {
        return <h1>No users found.</h1>;
      }
    
    return (
        <div className="user-list">
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="user">
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Telephone: {user.telephone}</p>
                        <p>City: {user.city}</p>
                        <p>Website: {user.website_url}</p>
                        <p>Primary Instrument: {user.primary_inst}</p>
                        
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default UserList