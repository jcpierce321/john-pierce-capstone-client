
import React, { useState } from 'react';
import axios from 'axios';
import './UserSearch.scss';

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT || 8080;

function Checkbox({ id, name, checked, onChange }) {
    return (
        <div key={id}>
            <input
                type='checkbox'
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{name}</label>
        </div>
    );
}

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
            <h1 className='user-signup__title'>SEARCH</h1>
            <form onSubmit={handleSearch}>
                {selectedInstruments.map(item => (
                    <Checkbox
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        checked={item.selected}
                        onChange={() => handleCheckboxChange(item.id)}
                    />
                ))}
                <button type='submit'>Search</button>
            </form>

            {searchResults && (
                <div>
                    <h2>SEARCH RESULTS</h2>
                    <ul>
                        {searchResults.map(user => (
                            <li key={user.user_id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default UserSearch;