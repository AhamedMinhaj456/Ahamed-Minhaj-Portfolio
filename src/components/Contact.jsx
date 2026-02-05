import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-white-100 via-black to-gray-800 p-4 text-white mt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full w-full">
        <div className="pb-8 text-left">
          <h2 className="text-5xl font-bold text-white mb-4">Contact</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>

          <p className="text-gray-300 max-w-2xl">
            I'm currently seeking new working opportunities to collaborate on
            exciting projects. Whether you have an idea in mind or just want to
            say hi, feel free to{" "}
            <span className="font-semibold text-white">contact me!</span>
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/jbwxrkwa"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message here..."
              id=""
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
