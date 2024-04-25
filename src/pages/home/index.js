import Banner from '../../components/Banner';
import QuickbooksStats from '../../components/StatsInfo';
import ProductsList from '../../components/ProductsList';
import AssitedLearning from '../../components/Benefits';
import Subscription from '../../components/Subscription';
import SuccessStories from '../../components/SuccessStories';
import FooterSection from '../../components/Footer';
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
      <FooterSection />
    </div>
  );
}

export default Home;
