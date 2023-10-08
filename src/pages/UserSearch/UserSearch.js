
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Checkbox from '../../components/Checkbox/Checkbox';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import './UserSearch.scss';
import '../Homepage/Homepage.scss';
import Logo from '../../assets/images/music-note.png';


const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT || 8080;

function UserSearch() {
    const instruments = [
        'Flute',
        'Piccolo',
        'Oboe',
        'Bassoon',
        'B-flat clarinet',
        'E-flat clarinet',
        'Alto saxophone',
        'Tenor saxophone',
        'Baritone saxophone',
    ];

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

    const [selectedInstruments, setSelectedInstruments] = useState(
        instruments.map(item => ({
            id: item,
            name: item,
            selected: false
        }))
    );

    const [searchResults, setSearchResults] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();

        const selectedInstrumentsArray = selectedInstruments
            .filter(item => item.selected)
            .map(item => item.name);
    
        try {
            const response = await axios.get(`${API_URL}:${PORT}/users/search`, {
                params: {
                    instruments: selectedInstrumentsArray
                }
            });

            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching users:', error);
        }
    };

    const handleCheckboxChange = (instrumentId) => {
        setSelectedInstruments(prevInstruments =>
            prevInstruments.map(item => ({
                ...item,
                selected: item.id === instrumentId ? !item.selected : item.selected
            }))
        );
    };

    return (
        <>
            <h1 className='user-search__title'>SEARCH</h1>
            <form className='user-search' onSubmit={handleSearch}>
                <div className='user-search__checkbox-container'>
                    <div >
                        {selectedInstruments.map(item => (
                            <Checkbox
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                checked={item.selected}
                                onChange={() => handleCheckboxChange(item.id)}
                            />
                        ))}
                    </div>
                    <div className='user-search__photo'></div>
                </div>    
                <div className='user-search__button-container'>
                    <button className='user-search__button' type='submit'>Search</button>
                </div>
            </form>

            {searchResults && (
                <div className='user-search__results'>
                    <h2 className='user-search__title'>SEARCH RESULTS</h2>
                    <div>
                        {searchResults.map(user => (
                            // <li /*className='user-search__text' key={user.user_id}*/>
                            //     {/* <Link to={`/user/${user.user_id}`}>{user.name}</Link> */}
                            
                            //     <ProfileCard key={user.user_id} user={user} />
                            // </li>
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
                            {/* <div className='user-list__button-container'>
                                <button className='user-list__button button'>CLOSE</button>
                            </div> */}
                        </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default UserSearch;