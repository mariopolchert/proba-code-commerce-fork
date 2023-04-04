import { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/logo_green.svg";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center pr-4 pl-1 pt-10 bg-[#222] opacity-95 text-[#39ff14] box-border">
            <div>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer "
                >
                    <img src={Logo} alt="Logo" className="w-[4vw] " />
                </Link>
            </div>

            {/* menu */}
            <ul className="hidden text-xl md:flex">
                <li>
                    <Link
                        className="text-[#FFDEAD] hover:text-[#39ff14]  duration-500"
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#FFDEAD] hover:text-[#39ff14] duration-500"
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#FFDEAD] hover:text-[#39ff14] duration-500"
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#FFDEAD] hover:text-[#39ff14] duration-500"
                        to="work"
                        smooth={true}
                        duration={500}
                    >
                        Work
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#FFDEAD] hover:text-[#39ff14] duration-500"
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div
                onClick={handleClick}
                className="md:hidden z-10 text-[#39ff14]"
            >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">
                    <Link
                        className="hover:text-[#39ff14]"
                        onClick={handleClick}
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link
                        className="hover:text-[#39ff14]"
                        onClick={handleClick}
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link
                        className="hover:text-[#39ff14]"
                        onClick={handleClick}
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link
                        className="hover:text-[#39ff14]"
                        onClick={handleClick}
                        to="work"
                        smooth={true}
                        duration={500}
                    >
                        Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link
                        className="hover:text-[#39ff14]"
                        onClick={handleClick}
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className="hidden lg:flex fixed flex-col top-[45%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-tr-3xl border-r-2 border-t-2 border-[#39ff14]">
                        <a
                            className="flex justify-between items-center w-full text-[#39ff14] pl-4 font-extrabold"
                            href="/"
                        >
                            Linkedin <FaLinkedin size={30} color={"#FFDEAD"} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] border-r-2 border-[#39ff14] ">
                        <a
                            className="flex justify-between items-center w-full text-[#39ff14] pl-4 font-extrabold"
                            href="/"
                        >
                            Github <FaGithub size={30} color={"#FFDEAD"} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] border-r-2 border-[#39ff14]">
                        <a
                            className="flex justify-between items-center w-full text-[#39ff14] pl-4 font-extrabold"
                            href="/"
                        >
                            Twitter <FaTwitter size={30} color={"#FFDEAD"} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-br-3xl border-r-2 border-b-2 border-[#39ff14]">
                        <a
                            className=" flex justify-between items-center w-full text-[#39ff14]#FFDEAD  font-extrabold"
                            href="/"
                        >
                            Email <HiOutlineMail size={30} color={"#FFDEAD"} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
