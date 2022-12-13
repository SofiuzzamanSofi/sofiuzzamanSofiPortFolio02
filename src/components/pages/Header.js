import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import cv from "../assets/resume.pdf";
import sofiLogo from "../assets/sofiLogo.png";



const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setShowNav(false);
    }, [location?.pathname]);

    showNav &&
        window.addEventListener("scroll", () => {
            setShowNav(false);
        });


    return (
        <header className=" bg-slate-50 text-black dark:bg-black dark:text-white">
            <div className="px-7 py-2 container flex items-center justify-between max-w-screen-2xl mx-auto border dark:border-gray-800">
                <div className="logo">
                    <Link to="/" className=" text-xl ">
                        <img src={sofiLogo} alt="Logo" className="border-primary border-2 bg-primary hover:bg-blue-800  px-6 py-[2px] w-40 md:w-64 rounded-md " />
                    </Link>
                </div>
                <nav className=" hidden text-sm lg:flex items-center justify-between gap-5">
                    {/* <Link to="/about">About Me</Link> */}
                    <a href={location.pathname !== "/" ? "/" : "#aboutMe"}>About Me</a>
                    <a href={location.pathname !== "/" ? "/" : "#contact"}>Contact Me</a>
                    <a href={location.pathname !== "/" ? "/" : "#projects"}>Projects</a>
                    <Link to="/blogs">My Blogs</Link>
                    <Link to={cv} target="_blank" download
                        className="py-4 px-9 rounded-md border-[3px] border-primary hover:bg-primary hover:text-white"
                    >
                        Resume
                    </Link>
                </nav>
                <button className="lg:hidden" onClick={() => setShowNav(!showNav)}>
                    <HiOutlineMenuAlt3 size={28} />
                </button>
                <nav
                    className={` lg:hidden text-base w-full md:w-2/5 bg-slate-300 dark:bg-slate-900 h-full top-0 right-0 z-10 flex-col flex items-center justify-center  gap-5 fixed ${showNav ? "translate-x-0" : "translate-x-full"
                        } duration-300 transition-all`}
                >
                    <button
                        className="absolute top-10 left-10"
                        onClick={() => setShowNav(!showNav)}
                    >
                        <FaTimes size="32" />
                    </button>
                    {/* <Link to="/about">About Me</Link> */}
                    <a href={location.pathname !== "/" ? "/" : "#aboutMe"}>About Me</a>
                    <a href={location.pathname !== "/" ? "/" : "#contact"}>Contact Me</a>
                    <a href={location.pathname !== "/" ? "/" : "#projects"}>Projects</a>
                    <Link to="/blogs">My Blogs</Link>
                    <Link
                        to={cv} target="_blank" download
                        className="bg-red-600 py-2  px-3 rounded"
                    >
                        Resume
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
