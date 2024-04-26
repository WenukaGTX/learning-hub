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
                <h2 className='mb-4 text-center'>Assisted Learning Process</h2>
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
                                <p>Tab 1 Lorem Ipsum has been the industry's standard dummy text. When an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <div className='tab-cta'>
                                    <Button type="secondary" buttonText="Read more"></Button>
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
                                <p>Tab 2 Lorem Ipsum has been the industry's standard dummy text. When an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
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
                                <p>Tab 3 Lorem Ipsum has been the industry's standard dummy text. When an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
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