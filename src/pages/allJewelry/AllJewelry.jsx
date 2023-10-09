import { useEffect, useState } from "react";
import AllCard from "../../components/AllCard";
import Title from "../../components/Title";
import useAllJewelry from "../../hooks/useAllJewelry";

const AllJewelry = () => {
    const [allJewelry, loading,] = useAllJewelry()
    const [jewelrys, setJewelrys] = useState(allJewelry)
    useEffect(() => {
        setJewelrys(allJewelry)
    }, [loading])
    const jewelryItem = [... new Set(allJewelry?.map(item => item.category))]
    const filterItem = (cat) => {
        const newItem = allJewelry?.filter(item => item.category === cat)
        setJewelrys(newItem)
    }
    if (loading) {
        return <div className="flex justify-center py-40"><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div className="pt-24 md:px-20 mb-10">
            <Title heading={"All Jewelry"}></Title>
            <div className="grid grid-cols-4 md:grid-cols-10">
                <button onClick={() => setJewelrys(allJewelry)} className="text-[#832729] hover:text-black md:mx-6 md:mb-7">All</button>
                {
                    jewelryItem?.map((value, index) => <button onClick={() => filterItem(value)} className="md:mx-5 md:mb-7 text-[#832729] hover:text-black" key={index}>{value}</button>)
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 md:px-0" >
                {jewelrys?.map(item => <AllCard
                    key={item._id}
                    item={item}
                >
                </AllCard>)}
            </div>
        </div>
    );
};

export default AllJewelry;