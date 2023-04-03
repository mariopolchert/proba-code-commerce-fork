import React from "react";

const Contact = () => {
    const year = new Date().getFullYear();
    return (
        <div
            name="contact"
            className="w-full h-screen bg-[#222] flex flex-col justify-center items-center p-4"
        >
            <form
                method="POST"
                action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
                className="flex flex-col max-w-[600px] w-full mt-auto"
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#39ff14] text-[#FFDEAD] hover:text-[#39ff14] cursor-pointer">
                        What can I do for you...
                    </p>
                </div>
                <input
                    className="text-[#222] p-2 font-bold text-xl bg-[#ffdead] rounded-sm"
                    type="text"
                    placeholder="Name"
                    name="name"
                />
                <input
                    className="my-4 text-[#222] p-2 font-bold text-xl bg-[#ffdead] rounded-sm"
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <textarea
                    className="text-[#222] p-2 font-bold text-xl bg-[#ffdead] rounded-sm"
                    name="message"
                    rows="10"
                    placeholder="Message"
                ></textarea>
                <button className="text-white border-2 bg-[#222] hover:border-[#39ff14] px-6 py-3 my-8 mx-auto flex items-center">
                    Contact me
                </button>
            </form>
            <div className="mt-auto">
                <h1 className="text-[#ffdead]">
                    Made by Mario Polchert {year}{" "}
                </h1>
            </div>
        </div>
    );
};

export default Contact;
