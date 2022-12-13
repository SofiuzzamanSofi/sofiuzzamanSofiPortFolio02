import React from "react";
import projects from "../DemoData/data";
import ProjectCard from "./ProjectCard";


const Projects = () => {


    // const projects = [
    //     { id: 1, name: "" },
    //     { id: 2, name: "" },
    //     { id: 3, name: "" },
    //     { id: 4, name: "" },
    //     { id: 5, name: "" },
    // ]




    return (
        <section className="py-10" id="projects">
            <div className="container">
                <div className=" pb-10">
                    <p className="text-3xl md:text-5xl">Projects <span className='text-primary'>...</span></p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 content-center mx-auto">
                    {projects && projects?.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;