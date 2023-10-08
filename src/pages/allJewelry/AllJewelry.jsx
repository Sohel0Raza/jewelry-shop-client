import AllCard from "../../components/AllCard";
import Title from "../../components/Title";
import useAllJewelry from "../../hooks/useAllJewelry";

const AllJewelry = () => {
    const [allJewelry,loading] = useAllJewelry()
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