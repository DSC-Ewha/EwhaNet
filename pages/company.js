import React, { useState, useCallback } from 'react';
import { Input, Menu, Select, Button, List, Card, Avatar, Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import "../styles/pageMenuStyle.css";
import Link from 'next/link';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
const Company = () => {
    const { me } = useSelector(state => state.user);
    const { Search } = Input;
    const { Option } = Select;
    const colleageData = ['디자인', 'IT계열', '전자'];
    const majorData = {
        '디자인': ['영상디자인', '웹디자인'],
        'IT계열': ['DBA', '웹개발'],
        '전자': ['반도체', '통신']
    };
    const companys = [
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>로고</Avatar>, title: '삼성전자', alumni: 150 },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>로고</Avatar>, title: '삼성전자', alumni: 150 },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>로고</Avatar>, title: '삼성전자', alumni: 150 },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>로고</Avatar>, title: '삼성전자', alumni: 150 },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>로고</Avatar>, title: '삼성전자', alumni: 150 },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>로고</Avatar>, title: '삼성전자', alumni: 150 },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>로고</Avatar>, title: '삼성전자', alumni: 150 },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>로고</Avatar>, title: '삼성전자', alumni: 150 },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>로고</Avatar>, title: '삼성전자', alumni: 150 },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>로고</Avatar>, title: '삼성전자', alumni: 150 },
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
    return (
        <>
            {me ?
                <Layout style={{ minHeight: '100vh' }}>

                    <UserProfile />
                    <Layout>

                        <div style={{ padding: '10px', background: '#222222', height: '30vh' }}>
                            <div style={{
                                padding: '10vh',
                                fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'bold',
                                fontSize: '20px', lineHeight: '34px', textAlign: 'center', color: '#FFFFFF', mixBlendMode: 'normal'
                            }}>
                                현직자로 활동 중인 선배들의 진솔한 이야기를 확인해보세요!
                        <Search
                                    placeholder="기업명 검색하기"
                                    onSearch={value => console.log(value)}
                                    style={{ width: '50vw', marginTop: '3vh' }}
                                />
                                <Button style={{ background: '#222222', color: '#FFFFFF', marginLeft: '1vw' }}>추가하기 +</Button>
                            </div>

                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Menu mode='horizontal' style={{
                                background: 'rgba(135, 185, 74, 0.1)', color: '#00462A', fontFamily: 'Noto Sans KR', fontStyle: 'normal',
                                fontWeight: 'bold', textAlign: 'center'
                            }}>
                                <Menu.Item className="pageMenuStyle" style={{ color: '#00462A' }}>
                                    기업
                        </Menu.Item>
                            </Menu>
                        </div>
                        <div style={{ textAlign: 'center', background: '#FFFFFF', height: '10vh', paddingTop: '3vh' }}>
                            1차 분류
                    <Select
                                defaultValue={colleageData[0]}
                                style={{ width: '15vw', marginLeft: '3vw', marginRight: '10vw' }}
                                onChange={handleColleageChange}
                            >
                                {colleageData.map(colleage => (
                                    <Option key={colleage}>{colleage}</Option>
                                ))}
                            </Select>
                    2차 분류
                    <Select
                                style={{ marginLeft: '3vw', width: '15vw', marginRight: '3vw' }}
                                value={major}
                                onChange={onMajorChange}
                            >

                                {colleage.map(major => (
                                    <Option key={major}>{major}</Option>
                                ))}
                            </Select>
                            <Button style={{ background: '#00462A', color: '#FFFFFF' }} icon={<SearchOutlined />}>검색</Button>
                        </div>
                        <div style={{
                            color: '#00462A', marginTop: '5vh', marginLeft: '7vw', fontFamily: 'Noto Sans KR', fontStyle: 'normal',
                            fontWeight: 'bold', fontSize: '16px', lineHeight: '32px'
                        }}>조회수 TOP기업</div>
                        <div style={{ textAlign: 'center', marginTop: '5vh', marginLeft: '7vw', marginRight: '7vw' }}>
                            <List
                                grid={{
                                    gutter: 20,
                                    xs: 1,
                                    sm: 2,
                                    md: 3,
                                    lg: 4,
                                    xl: 4,
                                    xxl: 4,
                                }}
                                dataSource={companys}
                                renderItem={item => (
                                    <Link href="/companyspec"><a>
                                        <List.Item>
                                            <Card>
                                                {item.sumnail}
                                                <h3>{item.title}</h3>
                                                <p>동문 {item.alumni}명</p>
                                            </Card>
                                        </List.Item>
                                    </a></Link>
                                )}
                            />
                        </div>

                    </Layout>

                </Layout>
                : <LoginForm />}
        </>



    );
};

export default Company;