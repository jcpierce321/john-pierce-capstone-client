
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Checkbox from '../../components/Checkbox/Checkbox';
import './UserSearch.scss';

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
                <div className='user-search__button-container'>
                    <button className='user-search__button' type='submit'>Search</button>
                </div>
            </form>

            {searchResults && (
                <div>
                    <h2 className='user-search__title'>SEARCH RESULTS</h2>
                    <ul className='user-search__list'>
                        {searchResults.map(user => (
                            <li className='user-search__text' key={user.user_id}>
                                <Link to={`/profile/${user.user_id}`}>{user.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default UserSearch;