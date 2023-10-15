import NewArrivals from "../components/homepage/NewArrivals";
import OurServices from "../components/homepage/OurServices";
import SlideBanner from "../components/homepage/SlideBanner";
import WelcomeTo from "../components/homepage/WelcomeTo";

const HomePage = () => {
  return (
    <div>
      <SlideBanner />
      <NewArrivals />
      <WelcomeTo />
      <OurServices />
    </div>
  );
};

export default HomePage;
