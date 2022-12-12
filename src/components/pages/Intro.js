import React from "react";
import coddingLogo from "../assets/coddingLogo.gif";
import cv from "../assets/MD SOFIUZZAMAN with portfolio.pdf";


const Intro = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row md justify-between gap-5">
            <div className="flex items-center">
                <div className="grid gap-4 font-bold">
                    <p className="text-2xl md:text-4xl">Hello</p>
                    <p className="text-5xl md:text-7xl">I AM Sofiuzzaman Sofi</p>
                    <p className="md:text-2xl border">Front-end || MERN-Stack || Full-Stack Web Developer</p>
                    <div className="flex gap-6">
                        <a
                            href="./files/MD ARIFUL ISLAM RESUME REACT.pdf"
                            download
                            className="py-4 px-4 md:px-9 rounded-md border-[3px] border-primary bg-primary text-white  hover:bg-white hover:text-black"
                        >
                            Hire me
                        </a>
                        <a
                            href="../assets/MD SOFIUZZAMAN with portfolio.pdf"
                            // href={cv}
                            download
                            className="py-4 px-4 md:px-9 rounded-md border-[3px] border-primary hover:bg-primary hover:text-white"
                        >
                            Get Resume
                        </a>
                    </div>
                </div>
            </div>
            <div className="">
                <img
                    src={coddingLogo}
                    alt=""
                    className="w-full rounded-md"
                />
            </div>
        </section>
    );
};

export default Intro;
