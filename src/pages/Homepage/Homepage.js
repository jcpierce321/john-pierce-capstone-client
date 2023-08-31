import './Homepage.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT || 8080;

function Homepage () {
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
            <h1 className='user-list__title'>User List</h1>
            <ul className="user-list__list">
                {users.map(user => (
                    <li className='user-list__card' key={user.id} >
                        <h2 className='user-list__username'>{user.name}</h2>
                        <p className='user-list__text'>Primary Instrument: {user.primary_inst}</p>
                        <div className='user-list__parent'>
                          <div className='user-list__child'>
                            <label className='user-list__label'>EMAIL</label>
                            <p className='user-list__text'>{user.email}</p>
                            <label className='user-list__label'>TELEPHONE</label>
                            <p className='user-list__text'>{user.telephone}</p>
                          </div>
                          <div className='user-list__child'>
                            <label className='user-list__label'>WEBSITE</label>
                            <p className='user-list__text'>{user.website_url}</p>
                            <label className='user-list__label'>CITY</label>
                            <p className='user-list__text'>{user.city}</p>
                          </div>
                          <div>
                            <p className='user-list__text'>
                              Other Instruments: {user.flute && 'Flute, '}
                              {user.piccolo && 'Piccolo, '}
                              {user.oboe && 'Oboe, '}
                              {user.bassoon && 'Bassoon, '}
                              {user.clarinetBb && 'B-flat Clarinet, '}
                              {user.clarinetEb && 'E-flat Clarinet, '}
                              {user.saxAlto && 'Alto Saxophone, '}
                              {user.saxTenor && 'Tenor Saxophone, '}
                              {user.saxBaritone && 'Baritone Saxophone'}
                            </p>
                          </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default Homepage;