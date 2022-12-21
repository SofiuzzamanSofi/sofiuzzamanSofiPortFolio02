import React from "react";
import { useLocation } from "react-router-dom";





const ProjectDetails = () => {
    const { state } = useLocation();
    // console.log(state);


    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="lg:col-span-1 w-full">
                        {state.detailsImage?.map((img, index) => <div key={index}>
                            <img src={img ? img : ""} alt={state.title} />
                        </div>)}
                    </div>

                    <div className="lg:col-span-1 w-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold">{state.title}</h1>
                            <p className="text-sm">({state?.startTime} - {state?.endTime})/2022</p>
                        </div>
                        <p className="my-3">{state.description}</p>
                        <div className="my-3 flex items-center gap-2 sm:gap-5">
                            <a
                                href={state.live}
                                className="border-[2px] border-primary hover:bg-primary hover:text-white py-2 rounded  uppercase text-xs px-2 sm:px-5 "
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live Website
                            </a>
                            <a
                                href={state?.clientSide}
                                className="border-[2px] border-primary hover:bg-primary hover:text-white py-2 rounded  uppercase text-xs px-2 sm:px-5 "
                                target="_blank"
                                rel="noreferrer"
                            >
                                Client-Side Code
                            </a>
                            <a
                                href={state?.serverSide}
                                className="border-[2px] border-primary hover:bg-primary hover:text-white py-2 rounded  uppercase text-xs px-2 sm:px-5 "
                                target="_blank"
                                rel="noreferrer"
                            >
                                Server-Side Code
                            </a>
                        </div>
                        <h2 className="font-bold  uppercase">📑Features</h2>
                        <ul className="my-3 flex flex-col gap-3">
                            {state.features.map((feature) => (
                                <li key={feature?.id}>✅ {feature?.name}</li>
                            ))}
                        </ul>
                        <h2 className="font-bold  uppercase">✈️Technology</h2>
                        <div className="flex items-center flex-wrap gap-3 my-3">
                            {state.usedTechnology.map((item, index) => (
                                <button
                                    key={index}
                                    // className="border-[3px] border-primary bg-primary text-white hover:bg-white hover:text-black py-2 rounded shadow uppercase text-sm px-5 "
                                    className="border-[2px] border-primary hover:bg-primary hover:text-white cursor-text py-2 rounded shadow uppercase text-sm px-5 "
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
