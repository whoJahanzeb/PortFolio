import Footer from "./Footer";
import MainProjects from "./MainProjects";
import SocialLinks from "./SocialLinks";
function Home() {
  return (
    <>
      <section className="grid gap-20 py-10">
        <div className="py-6">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-xl font-mono text-zinc-400 text-center">
              Hello, I'm
            </h1>
            <h2 className="text-6xl text-white font-semibold text-center">
              Muhammad Jahanzeb
            </h2>
            <p className="text-xl text-center text-zinc-400">
              As a Software Engineer at{" "}
              <a
                href="https://www.cruisebrains.com/"
                target="_blank"
                className="text-zinc-300 font-semibold hover:underline"
              >
                Cruise Brains
              </a>
              , I create solutions that drive results for call tracking
              software.
            </p>
            <div className="mx-auto w-56 space-y-3">
              <div className="flex items-center space-x-3 bg-zinc-950 rounded-full text-zinc-400 hover:text-zinc-500">
                <a
                  href="public/MuhammadJahanzebResume.pdf"
                  download="Jahanzeb_Resume.pdf"
                  className="font-semibold text-base py-2 px-6"
                >
                  Download Resume
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a.75.75 0 0 1 .75.75v12.59l1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 1 1 1.1-1.02l1.95 2.1V2.75A.75.75 0 0 1 10 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
        <MainProjects />
        <Footer />
      </section>
    </>
  );
}
export default Home;
