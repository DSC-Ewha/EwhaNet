import React, { useState, useCallback } from 'react';
import { Input, Menu, Select, Button, List, Card, Avatar, Divider, Timeline, Row, Col, Steps, Popover, Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
const Profile = () => {
    const { me } = useSelector(state => state.user);
    const { Search } = Input;
    const { Option } = Select;
    const { Step } = Steps;
    const colleageData = ['인문대학', '자연대학', '공과대학'];
    const majorData = {
        '인문대학': ['철학과', '영문학과'],
        '자연대학': ['수학과', '화학과'],
        '공과대학': ['전자공학과', '기계공학과']
    };
    const schools = [
        { title: '영상디자인' },
        { title: '영상디자인' },
        { title: '영상디자인' },
        { title: '영상디자인' },
        { title: '영상디자인' },
        { title: '영상디자인' },
        { title: '영상디자인' },
        { title: '영상디자인' },
        { title: '영상디자인' },
        { title: '영상디자인' },
    ]

    const [colleage, setColleageState] = useState(majorData[colleageData[0]]);
    const [major, setMajorState] = useState(majorData[colleageData[0]][0]);
    const handleColleageChange = e => {
        setColleageState(majorData[e]);
        setMajorState(majorData[e][0]);
    };
    const onMajorChange = e => {
        setMajorState(e);
    }
    const customDot = (dot, { status, index }) => (
        //     <Popover
        //     content={
        //       <span>
        //         step {index} status: {status}
        //       </span>
        //     }
        //   >

        //   </Popover>
        <div style={{ background: '#FFFFFF', color: '#FFFFFF', border: '7px solid #5F5F5F', borderRadius: '70%', boxSizing: 'border-box', height: '10px' }}>
            {dot}
        </div>
    );

    return (

        <>
        {me ?
        <Layout style={{ minHeight: '100vh' }}>          <UserProfile />
        <Layout>
            <div style={{ padding: '10px', background: '#222222', height: '10vh' }}>
                <div style={{
                    padding: '2vh',
                    fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'bold',
                    fontSize: '20px', lineHeight: '34px', color: '#FFFFFF', mixBlendMode: 'normal'
                }}>
                    이화연님의 포트폴리오
                    <Button style={{ background: '#222222', color: '#FFFFFF', marginLeft: '1vw' }}>친구 추가하기</Button>
                </div>

            </div>
            <div style={{ textAlign: 'center' }}>
                <Menu mode='horizontal'
                    style={{
                        background: 'rgba(135, 185, 74, 0.1)', color: '#00462A', fontFamily: 'Noto Sans KR', fontStyle: 'normal',
                        fontWeight: 'bold', textAlign: 'center'
                    }}>
                    <Menu.Item className="pageMenuStyle" key="1" style={{ color: '#00462A' }}>
                        <Link href='/profile'>
                            <a>
                                요약
                            </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="pageMenuStyle" key="2" style={{ color: '#00462A' }}>
                        <Link href="/introduce">
                            <a>
                                자기 소개
                            </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="pageMenuStyle" key="3" style={{ color: '#00462A' }}>
                        <Link href="/career">
                            <a>
                                경력
                            </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="pageMenuStyle" key="4" style={{ color: '#00462A' }}>
                        <Link href="/award">
                            <a>
                                스킬/수상
                            </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="pageMenuStyle" key="5" style={{ color: '#00462A' }}>
                        <Link href="/interest">
                            <a>
                                관심분야
                            </a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>

            <div style={{ marginTop: '5vh', marginLeft: '7vw', marginRight: '7vw' , marginBottom:'20px'}}>
                <Avatar shape="square" size={200} icon={<UserOutlined />} style={{ float: 'left' }} />
                <div style={{ width: '58vw', marginLeft: '200px', background: '#FFFFFF' }}>
                    <Card style={{ height: '200px' }}>
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '20px', lineHeight: '29px', color: '#5F5F5F', mixBlendMode: 'normal' }}>마이크로소프트 인턴</div>
                        <br />
                        <p>
                            이화연
                        </p>
                        <p>
                            컴퓨터공학과 17
                        </p>
                        <br />
                        <p>
                            ewhain.my.protfolio.com
                        </p>
                    </Card>
                </div>
                <div style={{ marginTop: '5vh', background: '#FFFFFF', border: '1px solid #E9E9E9', boxSizing: 'border-box' }}>
                    <div style={{ margin: '30px', fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '20px', lineHeight: '29px', color: '#5F5F5F', mixBlendMode: 'normal' }}>경력 
                    <div style={{float:'right',fontWeight: 'normal', fontSize: '14px',}}>더 알아보기</div>
                    </div>
                    
                    <Timeline style={{paddingLeft:'10vw',paddingRight:'5vw'}}>
                        <Timeline.Item color="gray">
                        <h3>
                        마이크로소프트 인턴
                        </h3>
                        <p>
                        마이크로소프트에서 5명의 팀원들과 함께 마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과
                        </p>
                        </Timeline.Item>
                        <Timeline.Item color="gray">
                        <h3>
                        마이크로소프트 인턴
                        </h3>
                        <p>
                        마이크로소프트에서 5명의 팀원들과 함께 마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과
                        </p>
                        </Timeline.Item>
                        <Timeline.Item color="gray">
                        <h3>
                        마이크로소프트 인턴
                        </h3>
                        <p>
                        마이크로소프트에서 5명의 팀원들과 함께 마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과 함께마이크로소프트에서 5명의 팀원들과
                        </p>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <Row>
                    <Col span={11}>
                        <div style={{ marginTop: '5vh', background: '#FFFFFF', border: '1px solid #E9E9E9', boxSizing: 'border-box' }}>
                            <p style={{ marginTop: '30px', marginLeft:'30px', fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '20px', lineHeight: '29px', color: '#5F5F5F', mixBlendMode: 'normal' }}>업무 및 스킬</p>
                            <Divider style={{width:'3vw'}}/>
                            <ul>
                                <li>
                                가나다라마바사아
                                </li>
                                <li style={{marginTop:'5px'}}>
                                가나다라마바사아
                                </li>
                                <li style={{marginTop:'5px'}}>
                                가나다라마바사아
                                </li>
                                <li style={{marginTop:'5px'}}>
                                가나다라마바사아
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={2}>
                    </Col>
                    <Col span={11}>
                        <div style={{ marginTop: '5vh', background: '#FFFFFF', border: '1px solid #E9E9E9', boxSizing: 'border-box' }}>
                            <p style={{ marginTop: '30px', marginLeft:'30px', fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '20px', lineHeight: '29px', color: '#5F5F5F', mixBlendMode: 'normal' }}>수상</p>
                            <Divider orientation="center"/>
                            <ul>
                                <li>
                                가나다라마바사아
                                </li>
                                <li style={{marginTop:'5px'}}>
                                가나다라마바사아
                                </li>
                                <li style={{marginTop:'5px'}}>
                                가나다라마바사아
                                </li>
                                <li style={{marginTop:'5px'}}>
                                가나다라마바사아
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
            </Layout>
            </Layout>
        : <LoginForm />}
        </>



    );
};

export default Profile;