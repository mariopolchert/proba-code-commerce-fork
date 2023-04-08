import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen pt-36 bg-darkText">
            {/* Container */}
            <div className="max-w-[1000px]  mx-auto  px-22 flex flex-col justify-center h-full">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-paleGreen hover:text-accent duration-1000 py-4 cursor-pointer">
                    Welcome to my website, my name is...
                </p>
                <h1 className="h-20 pb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightText cursor-pointer hover:text-accent duration-1000">
                    Mario Polchert
                </h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-paleGreen hover:text-accent duration-1000 cursor-pointer">
                    I'm a Web Developer
                </h2>
                <div>
                    <Link to="work" smooth={true} duration={500}>
                        <button
                            className="group w-54 h-14 text-lightText border-2 border-lightText rounded px-6 py-3 my-2 flex items-center hover:text-paleGreen hover:border-accent group-hover:duration-1000 "
                            href="#work"
                        >
                            See my work...
                            <span className="group-hover:translate-x-2 duration-700">
                                <FiArrowRightCircle className="text-2xl ml-3 animate-pulse text-paleGreen " />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
