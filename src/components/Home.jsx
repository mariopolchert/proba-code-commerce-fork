import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen pt-36 bg-[#222]">
            {/* Container */}
            <div className="max-w-[1000px]  mx-auto  px-22 flex flex-col justify-center h-full">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#99de8d] hover:text-[#39ff14] duration-1000 py-4 cursor-pointer">
                    Hello, my name is...
                </p>
                <h1 className="h-20 pb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFDEAD] cursor-pointer hover:text-[#39ff14] duration-1000">
                    Mario Polchert
                </h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#99de8d] hover:text-[#39ff14] duration-1000 cursor-pointer">
                    I'm a Web Developer
                </h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">
                    I’m a full-stack developer specializing in building (and
                    occasionally designing) exceptional digital experiences.
                    Currently, I’m focused on building responsive full-stack web
                    applications.
                </p>
                <div>
                    <Link to="work" smooth={true} duration={500}>
                        <button
                            className="group w-48 h-14 text-[#FFDEAD] border-[1px] border-[#ffdead] rounded px-6 py-3 my-2 flex items-center hover:text-[#99de8d] hover:border-[#39ff14] group-hover:duration-1000 "
                            href="#work"
                        >
                            See my work...
                            <span className="group-hover:translate-x-2 duration-700">
                                <FiArrowRightCircle className="text-2xl ml-3 animate-pulse text-[#99de8d] " />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
