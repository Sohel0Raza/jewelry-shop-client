import HomeBanner from "./homeContaint/HomeBanner";
import HomeCategory from "./homeContaint/HomeCategory";
import HomeSCollection from "./homeContaint/HomeSCollection";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCategory/>
            <HomeSCollection></HomeSCollection>
        </div>
    );
};

export default Home;