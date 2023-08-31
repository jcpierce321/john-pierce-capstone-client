import { useState } from 'react';
import axios from 'axios';
import './UserSignup.scss';

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT || 8080;

function UserSignup() {
    const instruments = [
        'Flute',
        'Piccolo',
        'Oboe',
        'Bassoon',
        'B-flat Clarinet',
        'E-flat Clarinet',
        'Alto Saxophone',
        'Tenor Saxophone',
        'Baritone Saxophone'
    ];

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [city, setCity] = useState('');
    const [website_url, setWebsite_url] = useState('');
    const [selectedInstrument, setSelectedInstrument] = useState('');
    const [selectedInstruments, setSelectedInstruments] = useState(
        instruments.map(item => ({
            instrument: item,
            selected: false
        }))
    );

    const handleInstrumentChange = (e) => {
        setSelectedInstrument(e.target.value);
    };

    const handleCheckboxChange = instrument => {
        setSelectedInstruments(prevInstruments => {
            return prevInstruments.map(item => ({
                instrument: item.instrument,
                selected: item.instrument === instrument ? !item.selected : item.selected
            }));
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            name,
            email,
            telephone,
            city,
            website_url,
            primary_inst: selectedInstrument,
            flute: selectedInstruments.find(item => item.instrument === 'Flute').selected,
            piccolo: selectedInstruments.find(item => item.instrument === 'Piccolo').selected,
            oboe: selectedInstruments.find(item => item.instrument === 'Oboe').selected,
            bassoon: selectedInstruments.find(item => item.instrument === 'Bassoon').selected,
            clarinetBb: selectedInstruments.find(item => item.instrument === 'B-flat Clarinet').selected,
            clarinetEb: selectedInstruments.find(item => item.instrument === 'E-flat Clarinet').selected,
            saxAlto: selectedInstruments.find(item => item.instrument === 'Alto Saxophone').selected,
            saxTenor: selectedInstruments.find(item => item.instrument === 'Tenor Saxophone').selected,
            saxBaritone: selectedInstruments.find(item => item.instrument === 'Baritone Saxophone').selected
        };

        try {
            const userResponse = await axios.post(`${API_URL}:${PORT}/users`, userData);
            console.log(userResponse.data)

            console.log('User data:', userResponse.data);
        } catch (error) {
            console.error('Error creating user or instrument preferences:', error);
        }
    };

    return (
        <form className='user-signup' onSubmit={handleSubmit}>
            <label className='user-signup__label'>Name</label>
            <input className='user-signup__input' type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
            <label className='user-signup__label'>Email</label>
            <input className='user-signup__input' type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            <label className='user-signup__label'>Telephone</label>
            <input className='user-signup__input' type="tel" name="telephone" value={telephone} onChange={e => setTelephone(e.target.value)} />
            <label className='user-signup__label'>City</label>
            <input className='user-signup__input' type="text" name="city" value={city} onChange={e => setCity(e.target.value)} />
            <label className='user-signup__label'>Website URL</label>
            <input className='user-signup__input' type="url" name="website" value={website_url} onChange={e => setWebsite_url(e.target.value)} />
            <label className='user-signup__label'>Primary Instrument</label>
            <select className='user-signup__dropdown' onChange={handleInstrumentChange}>
                <option value="">Select Primary Instrument</option>
                {instruments.map(instrument => (
                    <option key={instrument} value={instrument}>
                        {instrument}
                    </option>
                ))}
            </select>
            <label>I double on:</label>
            {selectedInstruments.map(item => (
                <div key={item.instrument}>
                    <input
                        type="checkbox"
                        id={item.instrument}
                        name={item.instrument}
                        checked={item.selected}
                        onChange={() => handleCheckboxChange(item.instrument)}
                    />
                    <label htmlFor={item.instrument}>{item.instrument}</label>
                </div>
            ))}
            <button type='submit'>Submit</button>
        </form>
    );
}

export default UserSignup;