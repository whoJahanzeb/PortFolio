import React from "react";

function Footer() {
  return (
    <div className="text-zinc-300 grid gap-10 md:gap-20 md:grid-cols-2 lg:grid-cols-4">
      <div className="space-y-3">
        <h1 className="font-bold text-3xl">Address</h1>
        <p>Al-ata colony, Near al-beroni Ground, Multan, Punjab, Pakistan</p>
      </div>
      <div className="space-y-3">
        <h1 className="font-bold text-3xl">Projects</h1>
        <p>
          <a href="https://tailwind-protocol-clone.vercel.app/" target="_blank">
            Tailwind Protocol UX/UI
          </a>
        </p>
        <p>
          <a href="https://music-library-azure.vercel.app/" target="_blank">
            Music Library UX/UI
          </a>
        </p>
        <p>CallScaler Mobile APP</p>
        <p>
          <a href="https://todo-list-lilac-nu.vercel.app/" target="_blank">
            TODO Basic APP
          </a>
        </p>
      </div>
      <div className="space-y-3">
        <h1 className="font-bold text-3xl">About</h1>
        <p>
          As a Software Engineer at{" "}
          <a
            href="https://www.cruisebrains.com/"
            target="_blank"
            className="text-zinc-300 font-semibold hover:underline"
          >
            Cruise Brains
          </a>
          , I create solutions that drive results for call tracking software.
        </p>
      </div>
      <div className="space-y-3">
        <h1 className="font-bold text-3xl">Contact</h1>
        <p>
          <span className="text-base font-bold text-zinc-300">Email:</span>{" "}
          i.am.jahanzeb6@gmail.com
        </p>
        <p>
          <span className="text-base font-bold text-zinc-300">Number:</span>{" "}
          +923054601451
        </p>
      </div>
    </div>
  );
}

export default Footer;
