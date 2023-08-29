import './InstrumentDropdown.scss';

const InstrumentDropdown = ({ onChange }) => {
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

    return (
        <select onChange={onChange}>
            <option value="">Select Primary Instrument</option>
            {instruments.map(instrument => (
                <option key={instrument} value={instrument}>
                    {instrument}
                </option>
            ))}
        </select>
    );
};

export default InstrumentDropdown;