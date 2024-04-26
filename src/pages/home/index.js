import Banner from '../../components/Banner';
import AssitedLearning from '../../components/Benefits';
import ProductsList from '../../components/ProductsList';
import QuickbooksStats from '../../components/StatsInfo';
import Subscription from '../../components/Subscription';
import SuccessStories from '../../components/SuccessStories';
import FrequentlyAskedQuestions from '../../components/faq';

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
    </div>
  );
}

export default Home;
