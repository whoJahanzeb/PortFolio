import { projects } from "../data/projects";
function Projects() {
  return (
    <>
      <div className="py-20">
        <div className="space-y-10">
          <h1 className="text-4xl font-bold text-zinc-300">
            Delivering High-Quality Web and Mobile Solutions with Expertise in
            React JS, React Native, and Laravel
          </h1>
          <p className="text-zinc-400 text-xl font-semibold pb-20">
            With a strong foundation in React JS, React Native, and Laravel, I
            have successfully developed and delivered a range of innovative web
            and mobile applications. My projects reflect a deep commitment to
            quality, performance, and user-centric design, leveraging modern
            technologies to create scalable and robust solutions. Whether
            building dynamic web interfaces, seamless mobile experiences, or
            efficient backend systems, I am dedicated to transforming ideas into
            reality through clean code and best practices.
          </p>
        </div>
        <div className="grid gap-20">
          {projects.map((item) => {
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
                  <p className="text-zinc-400 text-lg">
                    {item.longDescription}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
