import Banner from '../../components/Banner';
import QuickbooksStats from '../../components/StatsInfo';
import ProductsList from '../../components/ProductsList';
import AssitedLearning from '../../components/Benefits';
import Subscription from '../../components/Subscription';
import SuccessStories from '../../components/SuccessStories';
import FrequentlyAskedQuestions from '../faq';

import FooterSection from '../../components/Footer';
import './home.scss';

function Home() {
  return (
    <div className="learning-hub-body-container">
      <Banner/>
      <QuickbooksStats/>
      <ProductsList/>
      <AssitedLearning/>
      <SuccessStories />
      <FrequentlyAskedQuestions />
      <Subscription />
      <FooterSection />
    </div>
  );
}

export default Home;
