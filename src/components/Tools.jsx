import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Wordpress from "../assets/wordpress.png";
import NextJSIcon from "../assets/nextjs.png";
import Mongo from "../assets/mongo.png";

const Tools = () => {
    return (
        <div
            name="tools"
            className="w-full h-screen pt-24 bg-darkText text-lightText"
        >
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-accent hover:text-accent cursor-pointer duration-1000 ">
                        Tools
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={HTML}
                            alt="HTML icon"
                        />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={CSS}
                            alt="CSS icon"
                        />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={JavaScript}
                            alt="JAVASCRIPT icon"
                        />
                        <p className="my-4">JAVASCRIPT</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={ReactImg}
                            alt="REACT icon"
                        />
                        <p className="my-4">REACT</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={NextJSIcon}
                            alt="NEXTJS icon"
                        />
                        <p className="my-4">NEXT.JS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Node}
                            alt="NODE icon"
                        />
                        <p className="my-4">NODE JS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Mongo}
                            alt="HTML icon"
                        />
                        <p className="my-4">MONGO DB</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Wordpress}
                            alt="HTML icon"
                        />
                        <p className="my-4">WORDPRESS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;
