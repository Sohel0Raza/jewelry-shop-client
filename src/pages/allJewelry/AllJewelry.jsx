import AllCard from "../../components/AllCard";
import Title from "../../components/Title";
import useAllJewelry from "../../hooks/useAllJewelry";

const AllJewelry = () => {
    const [allJewelry] = useAllJewelry()
    return (
        <div className="pt-24 md:px-20 mb-10">
            <Title heading={"All Jewelry"}></Title>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 md:px-0" >
                {allJewelry?.map(item => <AllCard
                    key={item._id}
                    item={item}
                >
                </AllCard>)}
            </div>
        </div>
    );
};

export default AllJewelry;