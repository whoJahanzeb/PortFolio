import React from "react";
import { services } from "../data/services";

function Services() {
  return (
    <>
      <div className="py-20">
        <div className="space-y-10">
          <h1 className="text-4xl font-bold text-zinc-300">
            Expert software development and technology solutions for your
            business needs.
          </h1>
          <p className="text-zinc-400 text-xl font-semibold pb-20">
            I specialize in creating dynamic, user-centric applications with a
            strong focus on performance and design. My expertise spans across a
            variety of modern technologies, allowing me to deliver comprehensive
            solutions tailored to your unique needs.
          </p>
        </div>
        <div className="grid gap-20">
          {services.map((item) => {
            return (
              <>
                <div className="space-y-6">
                  <div className="space-y-6">
                    <h1 className="text-4xl text-zinc-300">{item.title}</h1>
                    <p className="text-zinc-400 text-lg">{item.description}</p>
                  </div>
                  <div>
                    <img src={item.image} className="rounded-md" alt="" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
