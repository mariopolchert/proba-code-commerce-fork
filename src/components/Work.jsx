import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";

const Work = () => {
    return (
        <div name="work" className="w-full pt-24 md:h-screen bg-darkText">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-lightText border-accent hover:text-accent cursor-pointer duration-1000">
                        Work
                    </p>
                </div>

                {/* Container */}
                <div className="grid px-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Grid Item */}
                    {/* images: 1013 x 792 */}
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className="shadow-2xl shadow-black container rounded-md flex justify-center items-center mx-auto content-div" // group
                    ></div>
                    <div
                        style={{ backgroundImage: `url(${realEstate})` }}
                        className="shadow-2xl shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
                    ></div>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className="shadow-2xl shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
                    ></div>
                    <div
                        style={{ backgroundImage: `url(${realEstate})` }}
                        className="shadow-2xl shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
                    ></div>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className="shadow-2xl shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
                    ></div>
                    <div
                        style={{ backgroundImage: `url(${realEstate})` }}
                        className="shadow-2xl shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Work;

// <div
//     style={{ backgroundImage: `url(${realEstate})` }}
//     className="shadow-2xl shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
// >
//
// </div>
