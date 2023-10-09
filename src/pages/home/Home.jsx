import HomeBanner from "./homeContaint/HomeBanner";
import HomeCategory from "./homeContaint/HomeCategory";
import HomeSCollection from "./homeContaint/HomeSCollection";
import Offer from "./homeContaint/offer/Offer";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCategory/>
            <HomeSCollection></HomeSCollection>
            <Offer></Offer>
        </div>
    );
};

export default Home;