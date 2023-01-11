import React from 'react';
import { FaWhatsappSquare, FaFacebookSquare, FaYoutube, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaSnapchatSquare } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";




const ContactIcon = () => {


    return (
        <div className="grid grid-flow-col gap-4">
            <a target="_blank" rel="noreferrer" href="mailto:sofiuzzaman.sf@gmail.com">
                <IoMdMail className='h-6 w-6' />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/sofiuzzaman.sofii">
                <FaFacebookSquare className='h-6 w-6' />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC3L33hwCwqlV6Zsp_eadMXg">
                <FaYoutube className='h-6 w-6' />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/sofiuzzaman_Sof">
                <FaTwitterSquare className='h-6 w-6' />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ssofiuzzamansofi">
                <FaInstagramSquare className='h-6 w-6' />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.snapchat.com/add/sofiuzzamansofi?share_id=YU0N72t95Ps&locale=en-US">
                <FaSnapchatSquare className='h-6 w-6' />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sofiuzzaman-sf">
                <FaLinkedin className='h-6 w-6' />
            </a>
            <a target="_blank" rel="noreferrer" href="tel:+8801747216227">
                <FaWhatsappSquare className='h-6 w-6' />
            </a>
        </div>
    );
};

export default ContactIcon;