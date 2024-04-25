import Banner from '../../components/Banner';
import QuickbooksStats from '../../components/StatsInfo';
import ProductsList from '../../components/ProductsList';
import AssitedLearning from '../../components/Benefits';
import Subscription from '../../components/Subscription';
import SuccessStories from '../../components/SuccessStories';
import './home.scss';

function Home() {
  return (
    <div className="">
      <Banner />
      <QuickbooksStats />
      <ProductsList />
      <SuccessStories />
      <AssitedLearning />
      <Subscription />
    </div>
  );
}

export default Home;
