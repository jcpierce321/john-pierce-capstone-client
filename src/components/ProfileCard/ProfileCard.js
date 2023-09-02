import './ProfileCard.scss';

function ProfileCard({ user, onClose }) {
    return (
        <div className='profile-card'>
            <button className='profile-card__profile' onClick={onClose}>CLOSE</button>
            <h2 className='user-list__username'>{user.name}</h2>
                <label className='user-list__label'>PRIMARY INSTRUMENT</label>
                <p className='user-list__text'>{user.primary_inst}</p>
                <div className='user-list__parent'>
                    <div className='user-list__child'>
                        <label className='user-list__label'>EMAIL</label>
                        <p className='user-list__text'>{user.email}</p>
                        <label className='user-list__label'>TELEPHONE</label>
                        <p className='user-list__text'>{user.telephone}</p>
                    </div>
                    <div className='user-list__child'>
                        <label className='user-list__label'>WEBSITE</label>
                        <p className='user-list__text'>{user.website_url}</p>
                        <label className='user-list__label'>CITY</label>
                        <p className='user-list__text'>{user.city}</p>
                    </div>
                </div>
                        
                        
                {/* <div className='user-list__card-content'>
                    <label className='user-list__label'>SECONDARY INSTRUMENTS</label>
                    <ul>
                        {Object.entries(user)
                            .filter(([key, value]) => value === 1 && key !== 'user_id' && key !== 'primary_inst')
                            .map(([key, _]) => (
                                <li key={key} className='user-list__text'>
                                  {instrumentNames[key]}
                                </li>
                            ))}
                    </ul>
                </div> */}

        </div>
    );
}

export default ProfileCard;