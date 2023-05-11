import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

const Contact = () => {
    const year = new Date().getFullYear();
    return (
        <section
            name="contact"
            className="w-full h-screen bg-darkText flex flex-col justify-center items-center py-8 pt-24 lg:py-10 px-4 mx-auto"
        >
            <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center items-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 text-lightText border-accent hover:text-accent cursor-pointer duration-1000">
                        Tell me what you need...
                    </p>
                </div>
                <form
                    method="POST"
                    action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
                    className="flex flex-col max-w-[800px] w-full"
                >
                    <div>
                        <label
                            for="email"
                            className="block mt-5 mb-1 text-xl font-medium text-lightText dark:text-lightText"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-[#333333] border-2 border-paleGreen text-lightText text-lg rounded-lg focus:border-accent block w-full p-2.5 placeholder:text-lg"
                            placeholder="Your best @mail"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="subject"
                            className="block mt-5 mb-1 text-xl font-medium text-lightText"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="block p-3 w-full bg-[#333333] text-lg text-lightText rounded-lg border-2 border-paleGreen shadow-sm  focus:border-accent placeholder:text-lg"
                            placeholder="Name your problem"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            for="message"
                            className="block mt-5 mb-1 text-xl font-medium text-lightText"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            className="block p-2.5 w-full text-lg text-lightText bg-[#333333] rounded-lg shadow-sm border-2 border-paleGreen   focus:border-accent  placeholder:text-lg"
                            placeholder="Describe what you need help with. Feel free to ask me anything here...or drop me an email directly."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="group flex items-center py-3 px-6 my-4 text-lg font-medium border-2 border-lightText bg-darkText text-center text-lightText rounded sm:w-fit hover:text-paleGreen hover:border-accent focus:ring-4 focus:outline-none focus:ring-primary-300"
                    >
                        Send message
                        <span className="group group-hover:translate-x-2 duration-700">
                            <FiArrowRightCircle className="group text-2xl ml-3 md:animate-pulse  text-red-500 " />
                        </span>
                    </button>
                </form>
            </div>
            <footer className="author mt-auto">
                <h1 className="text-lightText">
                    Made by Mario Polchert {year}{" "}
                </h1>
            </footer>
        </section>
    );
};

export default Contact;
