const About = () => {
    return (
        <div
            name="about"
            className="w-screen h-screen pt-24 bg-darkText text-lightText"
        >
            <div className="flex flex-col py-6 justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-3xl lg:text-4xl font-bold inline border-b-4 border-accent hover:text-accent duration-1000">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="text-2xl lg:text-5xl font-bold sm:text-right sm:text-3xl">
                        <p>
                            Hi. I'm{" "}
                            <span className=" md:animate-pulse hover:text-accent hover:animate-none cursor-pointer duration-1000">
                                Mario
                            </span>
                            , it's good to have you here. Please, have a look
                            around.
                        </p>
                    </div>
                    <div>
                        <p className="text-xl lg:text-2xl">
                            I'm a passionate web developer, with a solid
                            foundation in web technologies, and a dedication to
                            delivering quality work. I'm always exploring new
                            frameworks and tools to enhance my abilities and
                            better serve my clients.
                            <br />
                            Collaboration and communication are essential to
                            success, and as a quick learner and team player, I
                            bring those skills to every project.
                            <br />
                            Whether you need website design, development, or
                            maintenance, I offer a range of services to make the
                            process easy and stress-free.
                            <br />
                            Let's work together to create something amazing!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
