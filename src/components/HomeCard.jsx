import { AiOutlineArrowRight } from "react-icons/ai";

const HomeCard = ({ item }) => {
    const { image, jewelryName } = item
    return (
        <div>
            <div className="card rounded-none bg-base-100 shadow-xl">
                <figure><img src={image} alt="gold" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-semibold text-xl text-[#832729]">{jewelryName}</h2>
                    <button className="mt-2 px-5 flex justify-center items-center hover:text-[#832729] hover:justify-evenly hover:duration-1000 ">
                        <span className="text-sm">Explore </span>
                        <span ><AiOutlineArrowRight className="ml-2 text-sm"></AiOutlineArrowRight> </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;