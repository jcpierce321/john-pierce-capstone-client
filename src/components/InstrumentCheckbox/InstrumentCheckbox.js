import './InstrumentCheckbox.scss'

const InstrumentCheckbox = ({ instrument, isChecked, onChange }) => {
    return (
      <label>
        <input
          type="checkbox"
          value={instrument}
          checked={isChecked}
          onChange={onChange}
        />
        {instrument}
      </label>
    );
  };
  
  export default InstrumentCheckbox;