import NewArrivals from "../components/homepage/NewArrivals";
import SlideBanner from "../components/homepage/SlideBanner";
import WelcomeTo from "../components/homepage/WelcomeTo";

const HomePage = () => {
  return (
    <div className="justify-center p-4">
      <SlideBanner />
      <NewArrivals />
      <WelcomeTo />
    </div>
  );
};

export default HomePage;
