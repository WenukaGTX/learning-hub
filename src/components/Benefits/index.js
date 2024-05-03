import './benefits.scss';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from '../Button';
import icon1 from '../../images/icons/il_life_automation copy.png';
import icon2 from '../../images/icons/il_life_tech_05 copy.png';
import icon3 from '../../images/icons/il_life_team_02 copy.png';

function App() {
    return (
        <section className='section-padding bt-ash'>
            <div className='container'>
                <h2 className='mb-4 text-center'>Assisted learning process</h2>
                <Tabs className="Tabs">
                    <TabList>
                        <Tab>Enhanced learning experience</Tab>
                        <Tab>Unlimited access</Tab>
                        <Tab>Community support</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='tabpanel-body'>
                            <div className='benefit-icon'>
                                <img src={icon1} alt="icon1" />
                            </div>
                            <div>
                                <h4>Enhanced learning experience</h4>
                                <p>Take your accounting practice to the next level with industry recognized certification. Manage all your clients and work. All in one place. Gain skills with free training. We offer flexible accounting plans to fit businesses small and large, across all industries,</p>
                                <div className='tab-cta'>
                                    <Button buttonText="Read more"></Button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='tabpanel-body'>
                            <div className='benefit-icon'>
                                <img src={icon2} alt="icon2" />
                            </div>
                            <div>
                                <h4>Unlimited access</h4>
                                <p>Access at anytime, anywhere and streamline productivity with accountant-only tools. Easy, efficient and innovative accounting software for accountants and accounting firms</p>
                                <div className='tab-cta'>
                                    <Button type="secondary" buttonText="Read more"></Button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='tabpanel-body'>
                            <div className='benefit-icon'>
                                <img src={icon3} alt="icon3" />
                            </div>
                            <div>
                                <h4>Community support</h4>
                                <p>Helps accounting professionals manage their practice workflow, save time and improve efficiency by automating time consuming accounting tasks and gives them access to their clients’ books anytime, anywhere.</p>
                                <div className='tab-cta'>
                                    <Button type="secondary" buttonText="Read more"></Button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
}

export default App;