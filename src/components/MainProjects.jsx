import React from "react";
import { projects } from "../data/projects";
import { NavLink } from "react-router-dom";
function MainProjects() {
  return (
    <div className="py-6">
      <h1 className="text-center text-6xl text-zinc-300 font-semibold">
        Projects
      </h1>
      <div className="grid gap-10 lg:grid-cols-2 py-20">
        {projects.map((item) => (
          <div
            key={item.id}
            className="rounded-md bg-zinc-950 py-6 px-4 space-y-6 shadow-md shadow-zinc-950 hover:shadow-lg hover:shadow-zinc-950"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="space-y-4"
            >
              <img src={item.image} alt="Some image" className="rounded" />
              <h1 className="text-zinc-300 text-2xl font-bold">{item.title}</h1>
              <p className="text-zinc-400 text-base">{item.description}</p>
              <button className="bg-zinc-900 rounded-full text-zinc-300 px-4 py-1">
                View Demo
              </button>
            </a>
          </div>
        ))}
      </div>
      <li className="flex items-center justify-center">
        <NavLink
          to="/projects"
          className="text-base text-zinc-400 hover:text-zinc-500 font-semibold border border-zinc-800 rounded-full px-6 py-2 bg-zinc-950"
        >
          Explore All Projects
        </NavLink>
      </li>
    </div>
  );
}

export default MainProjects;
