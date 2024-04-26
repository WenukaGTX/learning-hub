import Banner from '../../components/Banner';
import AssitedLearning from '../../components/Benefits';
import FooterSection from '../../components/Footer';
import ProductsList from '../../components/ProductsList';
import QuickbooksStats from '../../components/StatsInfo';
import Subscription from '../../components/Subscription';
import SuccessStories from '../../components/SuccessStories';
import FrequentlyAskedQuestions from '../faq';

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
