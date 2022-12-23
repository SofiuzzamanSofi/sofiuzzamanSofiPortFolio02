import React from "react";
import { FaWhatsappSquare, FaFacebookSquare, FaYoutube, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaSnapchatSquare } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from "react-photo-view";
import sofi1 from "../assets/sofi1.png";
import sofi3 from "../assets/sofi3.jpg";



const AboutMe = () => {

    return (
        <section className="py-10" id='aboutMe'>
            <div >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="lg:col-span-1 w-full">
                        <div className="">
                            <div className="flex justify-center items-center ">
                                <PhotoProvider>
                                    <PhotoView src={sofi3}>
                                        <img
                                            src={sofi1}
                                            alt="Sofiuzzaman-Sofi" title="Click to View Full Screen"
                                            // className="max-h-80 max-w-full rounded-full bg-primary hover:bg-white dark:hover:bg-black border-8 border-blue-600"
                                            className="max-h-80 max-w-full rounded-full bg-primary border-8 border-blue-600 cursor-pointer"
                                        />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1 w-full">
                        <div>
                            <h1 className="text-3xl font-bold uppercase">Md Sofiuzzaman Sofi</h1>
                            <h3 className="capitalize text-md text-primary">Front-end Web Developer || MERN-Stack Web Developer || Full-Stack Web Developer</h3>
                            <p className="my-3 text-justify">
                                I'm a Mern Stack Web Developer focused on developing Javascript
                                based web applications. I love to manage everything from complex
                                logic to the awesome layout of a web application.
                            </p>

                            <p className="mb-2 text-justify">
                                I have a lot of interest in New Things. I Think Life is valueless if there is no new things. Thats why I love to take new challenges everyday. I follow "never give up" slogan on handling errors or problems.
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