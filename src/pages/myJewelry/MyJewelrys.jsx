import { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import useAllJewelry from "../../hooks/useAllJewelry";
import Title from "../../components/Title";
import MyJewelry from "./MyJewelry";
const MyJewelrys = () => {
    const { user } = useContext(AuthContext);
    const [allJewelry] = useAllJewelry()
    const myJewelry = allJewelry?.filter(item => item.sellerEmail == user?.email)
    return (
        <div className="pt-24 md:mx-20">
            <Title heading={"My Jewelry"}></Title>
            <div className="overflow-x-auto shadow-xl px-5 pb-10">
                <table className="table w-full">
                    <thead>
                        <tr className="font-semibold text-lg text-[#832729]">
                            <th>#</th>
                            <th>Seller Name</th>
                            <th>Jewelry Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    {myJewelry?.map((item,index) => (
                        <MyJewelry
                        key={item._id}
                        item={item}
                        index={index + 1}
                        ></MyJewelry>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default MyJewelrys;