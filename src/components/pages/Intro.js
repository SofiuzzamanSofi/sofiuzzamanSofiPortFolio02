import React from "react";
import { Link } from "react-router-dom";
import coddingLogo from "../assets/coddingLogo.gif";
import cv from "../assets/resume.pdf";
import jsPDF from "jspdf";


const Intro = () => {


    return (
        <section className="flex flex-col-reverse md:flex-row md justify-between gap-5 py-10">
            <div className="flex items-center">
                <div className="grid gap-4 font-bold">
                    <p className="text-2xl md:text-4xl">Hello</p>
                    <p className="text-5xl md:text-7xl">I AM Sofiuzzaman Sofi</p>
                    <p className="md:text-2xl">Front-end || MERN-Stack || Full-Stack Web Developer</p>
                    <div className="flex gap-6">
                        <Link to=""
                            className="py-4 px-4 md:px-9 rounded-md border-[3px] border-primary bg-primary text-white  hover:bg-white hover:text-black"
                        >
                            Hire me
                        </Link>
                        <Link to={cv} target="_blank" download
                            className="py-4 px-4 md:px-9 rounded-md border-[3px] border-primary hover:bg-primary hover:text-white"
                        >
                            Get Resume
                        </Link>
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
