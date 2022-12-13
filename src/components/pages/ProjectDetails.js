import React from "react";
import { useLocation } from "react-router-dom";





const ProjectDetails = () => {
    const { state } = useLocation();

    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
                    <div className="lg:col-span-1 w-full">
                        <div autoPlay={true} infiniteLoop={true} className="">
                            <div>
                                <img src={state.coverImage[0]} alt={state.title} />
                            </div>
                            <div>
                                <img src={state.coverImage[1]} alt={state.title} />
                            </div>
                            <div>
                                <img src={state.coverImage[2]} alt={state.title} />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1 w-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold text-white">{state.title}</h1>
                            <p className="text-white text-sm">(May 12 - May -27)/2022</p>
                        </div>
                        <p className="text-white my-3">{state.description}</p>
                        <div className="my-3 flex items-center gap-5">
                            <a
                                href={state.live}
                                className="text-white bg-red-600 py-2 rounded  uppercase text-xs px-5 "
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live Website
                            </a>
                            <a
                                href={state.code}
                                className="text-white bg-red-600 py-2 rounded  uppercase text-xs px-5 "
                                target="_blank"
                                rel="noreferrer"
                            >
                                Source Code
                            </a>
                        </div>
                        <h2 className="text-white font-bold  uppercase">📑Features</h2>
                        <ul className="text-white my-3 flex flex-col gap-3">
                            {state.features.map((feature) => (
                                <li key={feature?.id}>✅ {feature?.name}</li>
                            ))}
                        </ul>
                        <h2 className="text-white font-bold  uppercase">✈️Technology</h2>
                        <div className="flex items-center flex-wrap gap-3 my-3">
                            {state.usedTechnology.map((item, index) => (
                                <button
                                    key={index}
                                    className="text-white bg-slate-900 py-2 rounded shadow uppercase text-sm px-5 "
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
