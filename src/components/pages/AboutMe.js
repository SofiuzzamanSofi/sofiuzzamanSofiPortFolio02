import React from "react";
import { FaWhatsappSquare, FaFacebookSquare, FaYoutube, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaSnapchatSquare } from 'react-icons/fa';
import sofi1 from "../assets/sofi1.png";



const AboutMe = () => {

    return (
        <section className="py-10" id='aboutMe'>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="lg:col-span-1 w-full">
                        <div className="">
                            <div className="overflow-hidden flex justify-center items-center ">
                                <img
                                    src={sofi1}
                                    alt="arif"
                                    className="max-h-80 max-w-full rounded-full bg-primary border-8 border-blue-600"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1 w-full">
                        <div>
                            <h1 className="text-3xl font-bold uppercase">Md Sofiuzzaman Sofi</h1>
                            <h3 className="capitalize text-md text-primary">Front-end Web Developer || MERN-Stack Web Developer || Full-Stack Web Developer</h3>
                            <p className="my-3">
                                I'm a Mern Stack Web Developer focused on developing Javascript
                                based web applications. I love to manage everything from complex
                                logic to the awesome layout of a web application.
                            </p>

                            <p className="mb-2">
                                I have a lot of interest in Saas products and Blockchain
                                Development. I want to work on this field, if I get an
                                opportunity.
                            </p>
                        </div>
                        <div>
                            <p className="text-md text-primary pt-5">Contact Platform---</p>
                        </div>
                        <div className="flex items-center gap-5 my-5">
                            <div className="grid grid-flow-col gap-4">

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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;