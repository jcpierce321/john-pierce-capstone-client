// import { useState } from 'react';
// import axios from 'axios';
// import './UserSearch.scss';

// const API_URL = process.env.REACT_APP_API_URL;
// const PORT = process.env.REACT_APP_API_PORT || 8080;

// function UserSearch({ onSearch }) {
//     const instruments = [
//         'Flute',
//         'Piccolo',
//         'Oboe',
//         'Bassoon',
//         'B-flat Clarinet',
//         'E-flat Clarinet',
//         'Alto Saxophone',
//         'Tenor Saxophone',
//         'Baritone Saxophone',
//     ];

//     const [selectedInstruments, setSelectedInstruments] = useState(
//         instruments.map(item => ({
//             instrument: item,
//             selected: false
//         }))
//     );

//     const handleCheckboxChange = instrument => {
//         setSelectedInstruments(prevInstruments => {
//             return prevInstruments.map(item => ({
//                 instrument: item.instrument,
//                 selected: item.instrument === instrument ? !item.selected : item.selected
//             }));
//         });
//     };

//     const handleSearch = async (e) => {
//         e.preventDefault();

//         const selectedInstrumentsArray = selectedInstruments
//             .filter(item => item.selected)
//             .map(item => item.instrument);

//         try {
//             const response = await axios.get(`${API_URL}:${PORT}/users/search`, {
//                 params: {
//                     instruments: selectedInstrumentsArray
//                 }
//             });

//             onSearch(response.data);
//         } catch (error) {
//             console.error('Error searching users:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSearch}>
//             <label>Search</label>
//             {selectedInstruments.map(item => (
//                 <div key={item.instrument}>
//                     <input
//                         type='checkbox'
//                         id={item.instrument}
//                         name={item.instrument}
//                         checked={item.selected}
//                         onChange={() => handleCheckboxChange(item.instrument)}
//                     />
//                     <label htmlFor={item.instrument}>{item.instrument}</label>
//                 </div>
//             ))}
//             <button type='submit'>Search</button>
//         </form>
//     );
// }

// export default UserSearch;

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
        'B-flat Clarinet',
        'E-flat Clarinet',
        'Alto Saxophone',
        'Tenor Saxophone',
        'Baritone Saxophone',
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

        const selectedInstrumentsString = selectedInstrumentsArray.join(',');

        try {
            const response = await axios.get(`${API_URL}:${PORT}/users/search`, {
                params: {
                    instruments: selectedInstrumentsString
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
        <div>
            <form onSubmit={handleSearch}>
                <label>Search</label>
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
                    <h2>Search Results</h2>
                    {/* Render search results here */}
                    <ul>
                        {searchResults.map(user => (
                            <li key={user.user_id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default UserSearch;