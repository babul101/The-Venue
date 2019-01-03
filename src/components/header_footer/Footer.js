import React from 'react';
import Fade from 'react-reveal/Fade';


const Footer = () => {
    return (
        <footer className='bck_red'>
            <Fade delay={500}>
                <div className='font_righteous footer_logo_venue'>The Venue</div>
                <div className='footer_copyright'>&copy;{new Date().getFullYear()}.All rights reserved.</div>
            </Fade>
        </footer>
    )
}

export default Footer;