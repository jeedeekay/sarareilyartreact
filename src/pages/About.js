import { Container, Row, Col, CardImg, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useState } from 'react';
import reilyEvent from '../app/assets/imgs/thumbnails/reily-event.jpg';
import reilyBackpack from '../app/assets/imgs/thumbnails/reily-backpack.jpg';

const About = () => {
    const [ currentActiveTab, setCurrentActiveTab ] = useState('1');

    return (
        <Container className='my-5'>
            <Nav tabs fill>
                <NavItem>
                    <NavLink className={`text-secondary fw-bold ${currentActiveTab === '1' ? 'active' : ''}`} onClick={() => setCurrentActiveTab('1')}>
                        Bio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={`text-secondary fw-bold ${currentActiveTab === '2' ? 'active' : ''}`} onClick={() => setCurrentActiveTab('2')}>
                        CV
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={currentActiveTab}>
                <TabPane tabId='1'>
                    <Container>
                        <Row>
                            <Col xs='12' md='6'>
                                <CardImg src={reilyEvent} alt='Reily at an event.' className='img-thumbnail' />
                            </Col>
                            <Col xs='12' md='6' className='align-self-center'>
                                <p className='text-start'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                        <Col xs='12' md='6' className='align-self-center'>
                                <p className='text-start'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Col>
                            <Col>
                                <CardImg src={reilyBackpack} alt='Reily at an event.' className='img-thumbnail' />
                            </Col>
                        </Row>
                    </Container>
                </TabPane>
                <TabPane tabId='2'>CV TAB</TabPane>
            </TabContent>
        </Container>
        
    );
};

export default About;