import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

const Contact = () => {
    const year = new Date().getFullYear();
    return (
        <div
            name="contact"
            className="w-full h-screen bg-darkText flex flex-col justify-center items-center p-4"
        >
            <form
                method="POST"
                action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
                className="flex flex-col max-w-[800px] w-full mt-auto"
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-accent text-lightText hover:text-accent cursor-pointer duration-1000">
                        Tell me what you need...
                    </p>
                </div>
                <input
                    className="text-darkText p-2 font-bold text-xl bg-lightText rounded-sm placeholder:text-darkText"
                    type="text"
                    placeholder="How would you like to be addressed..."
                    name="name"
                />
                <input
                    className="my-4 text-darkText p-2 font-bold text-xl bg-lightText rounded-sm placeholder:text-darkText"
                    type="email"
                    placeholder="Your finest Email address..."
                    name="email"
                />
                <textarea
                    className="text-darkText p-2 font-bold text-xl bg-lightText rounded-sm placeholder:text-darkText"
                    name="message"
                    rows="10"
                    placeholder="What needs to be done..."
                ></textarea>
                <div className="button_div flex justify-end">
                    <button
                        className="group w-44 h-14 text-lightText border-2 border-lightText rounded px-6 py-3 my-4 flex items-center hover:text-paleGreen hover:border-accent group-hover:duration-700 "
                        href="#work"
                    >
                        Let's talk...
                        <span className="group-hover:translate-x-2 duration-700">
                            <FiArrowRightCircle className="text-2xl ml-3 animate-pulse text-paleGreen " />
                        </span>
                    </button>
                </div>
            </form>
            <div className="mt-auto">
                <h1 className="text-lightText">
                    Made by Mario Polchert {year}{" "}
                </h1>
            </div>
        </div>
    );
};

export default Contact;
