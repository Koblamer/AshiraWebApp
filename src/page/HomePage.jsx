import NewArrivals from "../components/homepage/NewArrivals";
import OurServices from "../components/homepage/OurServices";
import SlideBanner from "../components/homepage/SlideBanner";
import WelcomeTo from "../components/homepage/WelcomeTo";
import Header from "../layout/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <SlideBanner />
      <NewArrivals />
      <WelcomeTo />
      <OurServices />
    </div>
  );
};

export default HomePage;
