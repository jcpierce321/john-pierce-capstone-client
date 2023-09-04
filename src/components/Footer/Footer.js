import { Link } from 'react-router-dom';

import './Footer.scss'
import Logo from '../../assets/images/music-note.png';
import facebookLogo from '../../assets/images/facebook-logo.png';
import instagramLogo from '../../assets/images/instagram.png';
import tiktokLogo from '../../assets/images/tik-tok.png';

function Footer () {
    return (
        <div className='footer'>
            <div className='footer__brand'>
                <Link to={"/"}>
                    <img className="footer__logo" src={Logo} alt="Logo for DUBLR" />
                </Link>
                <h1 className="footer__title">DUBLR</h1>
            </div>
            <div className='footer__tags'>
                <Link to='https://www.facebook.com'>
                    <img className='footer__image' src={facebookLogo} alt='Facebook'/>
                </Link>
                <Link to='https://www.instgram.com'>    
                    <img className='footer__image' src={instagramLogo} alt='Instgram'/>
                </Link>
                <Link to='https://www.tiktok.com'>
                    <img className='footer__image' src={tiktokLogo} />
                </Link>
            </div>
        </div>
    );
}

export default Footer;