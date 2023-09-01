import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        'B-flat clarinet',
        'E-flat clarinet',
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

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

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
            clarinetBb: selectedInstruments.find(item => item.instrument === 'B-flat clarinet').selected,
            clarinetEb: selectedInstruments.find(item => item.instrument === 'E-flat clarinet').selected,
            saxAlto: selectedInstruments.find(item => item.instrument === 'Alto Saxophone').selected,
            saxTenor: selectedInstruments.find(item => item.instrument === 'Tenor Saxophone').selected,
            saxBaritone: selectedInstruments.find(item => item.instrument === 'Baritone Saxophone').selected
        };

        try {
            const userResponse = await axios.post(`${API_URL}:${PORT}/users`, userData);
            console.log(userResponse.data)

            const newUser = userResponse.data;
            setUsers((prevUsers) => [newUser, ...prevUsers]);

            setName('');
            setEmail('');
            setTelephone('');
            setCity('');
            setWebsite_url('');
            setSelectedInstrument('');
            setSelectedInstruments(instruments.map(item => ({
                instrument: item,
                selected: false
            })));

            alert('Signup successful!')

            navigate('/');

        } catch (error) {
            console.error('Error creating user or instrument preferences:', error);
        }
    };

    const [isActive, setIsActive] = useState({
        name: false,
        email: false,
        telephone: false,
        city: false,
        website: false,
      });

    return (
        <>
            <h1 className='user-signup__title'>SIGN UP</h1>
            <form className='user-signup' onSubmit={handleSubmit}>
                <label className={`user-signup__label ${isActive.name ? 'active' : ''}`}>NAME</label>
                <input
                    className={`user-signup__input ${isActive.name ? 'active' : ''}`}
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <label className={`user-signup__label ${isActive.email ? 'active' : ''}`}>EMAIL</label>
                <input
                    className={`user-signup__input ${isActive.email ? 'active' : ''}`}
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <label className={`user-signup__label ${isActive.telephone ? 'active' : ''}`}>TELEPHONE</label>
                <input
                    className={`user-signup__input ${isActive.telephone ? 'active' : ''}`}
                    type="tel"
                    name="telephone"
                    value={telephone}
                    onChange={e => setTelephone(e.target.value)} />
                <label className={`user-signup__label ${isActive.city ? 'active' : ''}`}>CITY</label>
                <input
                    className={`user-signup__input ${isActive.city ? 'active' : ''}`}
                    type="text"
                    name="city"
                    value={city}
                    onChange={e => setCity(e.target.value)} />
                <label className={`user-signup__label ${isActive.website_url ? 'active' : ''}`}>WEBSITE URL</label>
                <input
                    className={`user-signup__input ${isActive.website_url ? 'active' : ''}`}
                    type="url"
                    name="website"
                    value={website_url}
                    onChange={e => setWebsite_url(e.target.value)} />
                <label className='user-signup__label'>PRIMARY INSTRUMENT</label>
                <select className='user-signup__dropdown' onChange={handleInstrumentChange}>
                    <option value="">Select Primary Instrument</option>
                    {instruments.map(instrument => (
                        <option key={instrument} value={instrument}>
                            {instrument}
                        </option>
                    ))}
                </select>
                <label className='user-signup__label'>I DOUBLE ON</label>
                {selectedInstruments.map(item => (
                    <div key={item.instrument}>
                        <input
                            type="checkbox"
                            id={item.instrument}
                            name={item.instrument}
                            checked={item.selected}
                            onChange={() => handleCheckboxChange(item.instrument)}
                        />
                        <label className='user-signup__checkbox-label' htmlFor={item.instrument}>{item.instrument}</label>
                    </div>
                ))}
                <button className='user-signup__button' type='submit'>SUBMIT</button>
            </form>
        </>
    );
}

export default UserSignup;