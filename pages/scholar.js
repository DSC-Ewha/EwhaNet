import React, { useState, useCallback } from 'react';
import { Input, Menu, Select, Button, List, Card,Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
const Scholar = () => {
    const { me } = useSelector(state => state.user);
    const { Search } = Input;
    const { Option } = Select;
    const colleageData = ['인문대학', '자연대학', '공과대학'];
    const majorData = {
        '인문대학': ['철학과', '영문학과'],
        '자연대학': ['수학과', '화학과'],
        '공과대학': ['전자공학과', '기계공학과']
    };
    const schools = [
        { title: '이화여자대학교', alumni: 150 },
        { title: '이화여자대학교', alumni: 150 },
        { title: '이화여자대학교', alumni: 150 },
        { title: '이화여자대학교', alumni: 150 },
        { title: '이화여자대학교', alumni: 150 },
        { title: '이화여자대학교', alumni: 150 },
        { title: '이화여자대학교', alumni: 150 },
        { title: '이화여자대학교', alumni: 150 },
        { title: '이화여자대학교', alumni: 150 },
        { title: '이화여자대학교', alumni: 150 },
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
                    대학원 및 로스쿨에 재학 중인 선배들과 소통해보세요!
                    <Search
                        placeholder="선배들을 검색해보세요"
                        onSearch={value => console.log(value)}
                        style={{ width: '50vw' , marginTop:'3vh' }}
                    />
                </div>

            </div>
            <div style={{ textAlign: 'center' }}>
                <Menu mode='horizontal' style={{ background: 'rgba(135, 185, 74, 0.1)', color: '#00462A', fontFamily: 'Noto Sans KR', fontStyle: 'normal',
                    fontWeight: 'bold', textAlign: 'center'}}>
                    <Menu.Item className="pageMenuStyle" style={{color:'#00462A'}}>
                    <Link href="/scholar"> 대학원</Link>
                       
                    </Menu.Item>
                    <Menu.Item className="pageMenuStyle" style={{color:'#00462A'}}>
                    <Link href="/lawschool"><a>로스쿨</a></Link>
                        
                    </Menu.Item>
                </Menu>
            </div>
            <div style={{ textAlign: 'center', background: '#FFFFFF', height: '10vh', paddingTop: '3vh' }}>

                단과대학
                <Select
                    defaultValue={colleageData[0]}
                    style={{ width: '15vw', marginLeft: '3vw', marginRight: '10vw' }}
                    onChange={handleColleageChange}
                >
                    {colleageData.map(colleage => (
                        <Option key={colleage}>{colleage}</Option>
                    ))}
                </Select>

                    학과
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
            }}>조회수 TOP 대학원</div>
            <div style={{ textAlign: 'center',  marginTop: '5vh',marginLeft: '7vw', marginRight:'7vw'}}>
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
                    dataSource={schools}
                    renderItem={item => (
                        <Link href='/schoolspec'>
                        <a>
                        <List.Item>
                            <Card>
                            <h3>{item.title}</h3>
                            <p>동문 {item.alumni}명</p>
                        </Card>
                        </List.Item>
                        </a>
                        </Link>
                    )}
                />
            </div>
            </Layout>
            </Layout>
        : <LoginForm />}
        </>



    );
};

export default Scholar;