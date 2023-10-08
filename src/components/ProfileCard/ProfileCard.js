import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../../pages/Homepage/Homepage.scss';
import './ProfileCard.scss';
import Logo from '../../assets/images/music-note.png';

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT || 8080;

function ProfileCard() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    console.log("User ID:", id);

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
        axios.get(`${API_URL}:${PORT}/users/${id}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [id]);

    if (!user) {
            return <div>Loading...</div>;
    }

    return (
        <div className='user-list profile-card'>
            <div className='user-list__card profile-card__card'>
                <img className='user-list__image' src={Logo} />
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
                <div className='user-list__button-container'>
                    <a
                        href={`mailto:${user.email}?subject=Regarding%20DUBLR%20Contact&body=Hello%20${user.name},`}
                        className='user-list__button'
                    >
                        CONTACT {user.name}
                    </a>
                </div>
            </div>
            <div className='user-list__button-container'>
                <button className='user-list__button button'>CLOSE</button>
            </div>
        </div>
    );
}

export default ProfileCard;