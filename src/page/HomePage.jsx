import SlideBanner from "../components/homepage/SlideBanner";
import Body from "../components/homepage/body";

const HomePage = () => {
  return (
    <div className="flex justify-center p-4">
      <SlideBanner />
      <Body />
    </div>
  );
};

export default HomePage;
