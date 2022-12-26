import React from 'react';
import cover from "../assets/cover.png";
import ContactIcon from '../common/ContactIcon';


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

                    {/* contact icon import from common components--- */}
                    <ContactIcon />
                </div>
            </footer>
        </div>
    );
};

export default Footer;