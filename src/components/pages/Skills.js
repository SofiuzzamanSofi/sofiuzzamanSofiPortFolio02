import React from 'react';
import contactMe from "../assets/contactMe.gif";


const Skills = () => {

    const skills = [
        "javascript",
        "react js",
        "node js",
        "express js",
        "mongodb",
        "React Hooks",
        "Axios",
        "Firebase",
        "Stripe",
        "bootstrap",
        "tailwind css",
        "Material UI(familiar)",
        "next js (familiar)",
        "typescript (familiar)",
    ];





    return (
        <section className="py-10">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="lg:col-span-1 w-full">
                        <div className="overflow-hidden border-8 border-primary ">
                            <img
                                src={contactMe}
                                alt="arif"
                                className="max-h-80 min-w-full"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-1 w-full">
                        <div>
                            <h3 className="uppercase font-bold text-2xl">Skills</h3>
                            <div className="flex flex-wrap items-center gap-3 my-3">
                                {skills.map((item, index) => (
                                    <button
                                        key={index}
                                        className="text-white bg-primary py-1 uppercase text-sm px-5 "
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;