import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex space-x-4 justify-center">
      <a href="https://www.instagram.com/m_jahanzeb6/?hl=en" target="_blank">
        <BsInstagram className="w-6 h-6 text-zinc-400" />
      </a>
      <a href="https://github.com/whoJahanzeb" target="_blank">
        <FaGithub className="h-6 w-6 text-zinc-400" />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-jahanzeb-65990b22a/"
        target="_blank"
      >
        <FaLinkedin className="h-6 w-6 text-zinc-400" />
      </a>
    </div>
  );
}

export default SocialLinks;
