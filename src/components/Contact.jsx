function Contact() {
  return (
    <>
      <div className="py-20 space-y-10">
        <h1 className="text-4xl font-bold text-white">Contact Me</h1>
        <p className="text-lg text-zinc-300">
          I’d love to hear from you! Whether you have questions about my work,
          want to discuss a potential project, or just want to connect, feel
          free to reach out through any of the following methods. I’m always
          open to new opportunities and collaborations.
        </p>
        <div className="flex space-x-4 items-center">
          <h1 className="text-2xl font-bold text-zinc-400">Email:</h1>
          <a
            className="text-zinc-300 font-semibold hover:underline"
            target="_blank"
            href="mailto:i.am.jahanzeb6@gmail.com"
          >
            i.am.jahanzeb6@gmail.com
          </a>
        </div>
        <div className="flex space-x-4 items-center">
          <h1 className="text-2xl font-bold text-zinc-400">Phone:</h1>
          <a
            className="text-zinc-300 font-semibold hover:underline"
            target="_blank"
            href="tel:+923054601451"
          >
            +923054601451
          </a>
        </div>
        <div className="flex space-x-4 items-center">
          <h1 className="text-2xl font-bold text-zinc-400">LinkedIn:</h1>
          <a
            className="text-zinc-300 font-semibold hover:underline"
            target="_blank"
            href="https://www.linkedin.com/in/muhammad-jahanzeb-65990b22a/"
          >
            Muhammad Jahanzeb
          </a>
        </div>
        <div className="flex space-x-4 items-center">
          <h1 className="text-2xl font-bold text-zinc-400">Git:</h1>
          <a
            className="text-zinc-300 font-semibold hover:underline"
            target="_blank"
            href="https://github.com/whoJahanzeb"
          >
            whoJahanzeb
          </a>
        </div>
        {/* <div className="flex space-x-4 items-center">
          <h1 className="text-2xl font-bold text-zinc-400">Instagram:</h1>
          <a
            className="text-zinc-300 font-semibold hover:underline"
            target="_blank"
            href="https://www.instagram.com/m_jahanzeb6/?hl=en"
          >
            m_jahanzeb6
          </a>
        </div> */}
      </div>
    </>
  );
}

export default Contact;
