import Banner from '../../components/Banner';
import QuickbooksStats from '../../components/StatsInfo';
import ProductsList from '../../components/ProductsList';
import AssitedLearning from '../../components/Benefits';
import Subscription from '../../components/Subscription';
import FrequentlyAskedQuestions from '../faq';

import './home.scss';

function Home() {
  return (
    <div className="learning-hub-body-container">
      <Banner/>
      <QuickbooksStats/>
      <ProductsList/>
      <AssitedLearning/>
      <FrequentlyAskedQuestions/>
      <Subscription/>
    </div>
  );
}

export default Home;
