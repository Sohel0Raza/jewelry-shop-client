import { AiOutlineShoppingCart } from "react-icons/ai";

const AllCard = ({ item }) => {
    const { image, jewelryName, price } = item
    return (
        <div>
            <div className="card rounded-none bg-base-100 shadow-xl">
                <div className="h-48 mx-auto">
                    <img className="h-full" src={image} alt="gold" />
                </div>
                <div className="card-body">
                    <h2 className="font-semibold truncate  text-[#832729]">{jewelryName}</h2>
                    <p className="font-semibold">$ {price}</p>
                    <div className="mx-auto">
                        <button className="flex items-center btn-buy mt-5">Buy Now <AiOutlineShoppingCart className="ml-2"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCard;