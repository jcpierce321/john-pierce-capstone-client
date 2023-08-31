// import { useState } from 'react';
// import axios from 'axios';
// import './UserSearchForm.scss';

// const API_URL = process.env.REACT_APP_API_URL;
// const PORT = process.env.REACT_APP_API_PORT || 8080;

// function UserSearchForm({ onSearch }) {
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

// export default UserSearchForm;