import Banner from '../../components/Banner';
import QuickbooksStats from '../../components/StatsInfo';
import AssitedLearning from '../../components/Benefits';
import './home.scss';

function Home() {
  return (
    <div className="">
      <Banner/>
      <QuickbooksStats/>
      <AssitedLearning/>
    </div>
  );
}

export default Home;
