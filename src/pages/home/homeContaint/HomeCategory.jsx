import HomeCard from "../../../components/HomeCard";
import Title from "../../../components/Title";
import useAllJewelry from "../../../hooks/useAllJewelry";

const HomeCategory = () => {
    const [allJewelry] = useAllJewelry()
    return (
        <div className="my-10 mx-5 md:mx-20">
            <Title heading={"Shop By Category"} subHeading={"Browse through your favorite categories. We've got them all!"}></Title>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {
                    allJewelry?.slice(0, 8).map(item => <HomeCard
                        key={item._id}
                        item={item}
                    ></HomeCard>)
                }
            </div>
        </div>
    );
};

export default HomeCategory;