import './Homepage.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT || 8080;

function Homepage () {
    const [users, setUsers] = useState(null);

    const instrumentNames = {
      flute: 'Flute',
      piccolo: 'Piccolo',
      oboe: 'Oboe',
      bassoon: 'Bassoon',
      clarinetBb: 'B-flat clarinet',
      clarinetEb: 'E-flat clarinet',
      saxAlto: 'Alto saxophone',
      saxTenor: 'Tenor saxophone',
      saxBaritone: 'Baritone saxophone',
    };

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
            <h1 className='user-list__title'>FIND A MUSICIAN</h1>
            <p className='user-list__copy'>Doubler: a musician who plays two or more instruments from the woodwind family.<br />Most Broadway orchestrations depend heavily on these gifted musicians.<br /> Find a doubler for your show right here.</p>
            <ul className="user-list__list">
                {users.map(user => (
                    <li className='user-list__card' key={user.id}>
                        <h2 className='user-list__username'>{user.name}</h2>
                        <label className='user-list__label'>PRIMARY INSTRUMENT</label>
                        <p className='user-list__text'>{user.primary_inst}</p>
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
                        </div>
                        
                        
                        <div className='user-list__card-content'>
                          <label className='user-list__label'>SECONDARY INSTRUMENTS</label>
                          <ul>
                            {Object.entries(user)
                              .filter(([key, value]) => value === 1 && key !== 'user_id' && key !== 'primary_inst')
                              .map(([key, _]) => (
                                <li key={key} className='user-list__text'>
                                  {instrumentNames[key]}
                                </li>
                              ))}
                          </ul>
                        </div>
                        <button className='user-list__button'>CONTACT {user.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Homepage;