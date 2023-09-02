import './Checkbox.scss';


const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT || 8080;

function Checkbox({ id, name, checked, onChange }) {
    return (
        <div className='checkbox__checkbox' key={id}>
            <input
                type='checkbox'
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id} className='checkbox__label'>{name}</label>
        </div>
    );
}

export default Checkbox;