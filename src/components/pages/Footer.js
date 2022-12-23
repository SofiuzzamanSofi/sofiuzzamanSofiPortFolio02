import React from 'react';
import { FaWhatsappSquare, FaFacebookSquare, FaYoutube, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaSnapchatSquare } from 'react-icons/fa';
import cover from "../assets/cover.png";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        // <footer className="footer p-7  bg-slate-50 text-black dark:bg-black dark:text-white">
        <div className=' absolute bottom-0 left-0 right-0  bg-slate-50 text-black dark:bg-black dark:text-white'>
            <footer className="footer p-7 max-w-screen-2xl mx-auto border dark:border-gray-800">
                <div>
                    <img src={cover} alt="" className="border-primary border-4 bg-white hover:bg-slate-200 px-6 py-[2px] w-40 md:w-64 rounded-md " />
                    {/* <img src={footerLogo} alt="" className="rounded-full w-40 " /> */}
                    <p>Property of Sofiuzzaman Sofi.<br />© Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">

                        <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/#drafts?compose=DmwnWsdLRzWqgqNpggrKwzbMDgsNptHbkDMTMgzpNgMBsMjKqtDNdWbSDJLwFmlWnXlLCKDRVXDL" className='text-black'>
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
                </div>
            </footer>
        </div>
    );
};

export default Footer;