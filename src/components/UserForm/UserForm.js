import { useState } from 'react';
import InstrumentDropdown from "../InstrumentDropdown/InstrumentDropdown";

function UserForm() {
    const [selectedInstrument, setSelectedInstrument] = useState('');

    const handleInstrumentChange = e => {
        setSelectedInstrument(e.target.value);
    };

    return (
        <form>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Telephone</label>
            <input type="tel" name="telephone" />
            <label>City</label>
            <input type="text" name="city" />
            <label>Website URL</label>
            <input type="url" name="website" />
            <label>Primary Instrument</label>
            <InstrumentDropdown onChange={handleInstrumentChange} />
        </form>
    );
}

export default UserForm;