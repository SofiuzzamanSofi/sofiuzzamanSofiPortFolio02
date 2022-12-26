import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import sofi1 from "../assets/sofi1.png";
import sofi3 from "../assets/sofi3.jpg";
import ContactIcon from "../common/ContactIcon";



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


                            {/* contact icon import from common components--- */}
                            <ContactIcon />
                        </div>


                        {/* google map ----- */}
                        <div>
                            <iframe title="this is a google map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41298.61929588698!2d90.35705957154302!3d23.807334082767614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1672062657158!5m2!1sen!2sbd"
                                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full border-8 border-blue-600"
                            >
                            </iframe>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;