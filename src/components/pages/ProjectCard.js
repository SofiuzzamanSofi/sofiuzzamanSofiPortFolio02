import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();
    const { coverImage, title, projectType, id, description, live, clientSide, serverSide } =
        project;

    const handleClick = (projectId) => {
        navigate(`/project/${projectId}`, { state: project });
    };
    return (
        <div className=" w-full">
            <div className="dark:bg-slate-800 rounded overflow-hidden shadow-2xl">
                <img src={coverImage[0] ? coverImage[0] : ""} alt="" />

                <div className="px-5 pt-5 pb-6 ">
                    <div className="flex items-center justify-between">
                        <h2 className=" text-xl font-bold">{title ? title : ""}</h2>
                        <p className=" text-xs capitalize">{projectType ? projectType : ""}</p>
                    </div>
                    <p className="text-xs my-3">
                        {description.split(" ").slice(0, 17).join(" ")}...

                    </p>
                    <div className="flex items-center gap-2 justify-start">
                        <a
                            href={live ? live : ""}
                            className=" text-xs border-[2px] border-primary hover:bg-primary hover:text-white py-1.5 shadow-xl px-3 rounded"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live
                        </a>
                        <a
                            className=" text-xs border-[2px] border-primary hover:bg-primary hover:text-white py-1.5 shadow-xl px-3 rounded"
                            target="_blank"
                            rel="noreferrer"
                            href={clientSide ? clientSide : ""}
                        >
                            Client
                        </a>
                        <a
                            className=" text-xs border-[2px] border-primary hover:bg-primary hover:text-white py-1.5 shadow-xl px-3 rounded"
                            target="_blank"
                            rel="noreferrer"
                            href={serverSide ? serverSide : ""}
                        >
                            Server
                        </a>
                        <button
                            className=" text-xs border-[2px] border-primary hover:bg-primary hover:text-white py-1.5 shadow-xl px-3 rounded"
                            onClick={() => handleClick(id)}
                        >
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
