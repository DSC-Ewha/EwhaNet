import React, { useState, useCallback } from 'react';
import { Input, Menu, Select, Button, List, Card, Avatar,Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined, PlusCircleFilled } from '@ant-design/icons';
import Link from 'next/link';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
const People = () => {
    const { me } = useSelector(state => state.user);
    const { Search } = Input;
    const { Option } = Select;
    const colleageData = ['인문대학', '자연대학', '공과대학'];
    const majorData = {
        '인문대학': ['철학과', '영문학과'],
        '자연대학': ['수학과', '화학과'],
        '공과대학': ['전자공학과', '기계공학과']
    };
    const people = [
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>김</Avatar>, name: '김화연', major: '컴퓨터공학과' },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>김</Avatar>, name: '김화연', major: '컴퓨터공학과' },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>김</Avatar>, name: '김화연', major: '컴퓨터공학과' },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>김</Avatar>, name: '김화연', major: '컴퓨터공학과' },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>김</Avatar>, name: '김화연', major: '컴퓨터공학과' },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>김</Avatar>, name: '김화연', major: '컴퓨터공학과' },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>김</Avatar>, name: '김화연', major: '컴퓨터공학과' },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>김</Avatar>, name: '김화연', major: '컴퓨터공학과' },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>김</Avatar>, name: '김화연', major: '컴퓨터공학과' },
        { sumnail: <Avatar style={{ backgroundColor: '#C4C4C4', verticalAlign: 'middle' }}>김</Avatar>, name: '김화연', major: '컴퓨터공학과' },
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
                    관심 직무에 있는 사람을 찾아보세요!
                    <br />
                    <Select
                        placeholder="분류"
                        style={{ width: '120px',marginTop: '3vh' }}
                    >
                        <Option value="name">이름 찾기</Option>
                        <Option value="scholar">대학원</Option>
                        <Option value="lawschool">로스쿨</Option>
                        <Option value="company">기업</Option>
                        <Option value="job">직무</Option>
                    </Select>
                    <Search
                        placeholder="검색하기"
                        onSearch={value => console.log(value)}
                        style={{ width: '40vw',  marginLeft: '5px' , marginTop: '3vh' }}
                    />
                    <Button style={{ background: '#222222', marginTop: '3vh', color: '#FFFFFF', marginLeft: '1vw' }}>추가하기</Button>
                </div>

            </div>
            <div style={{ textAlign: 'center' }}>
                <Menu mode='horizontal'
                    style={{
                        background: 'rgba(135, 185, 74, 0.1)', color: '#00462A', fontFamily: 'Noto Sans KR', fontStyle: 'normal',
                        fontWeight: 'bold', textAlign: 'center'
                    }}>
                    <Menu.Item className="pageMenuStyle" key="1" style={{ color: '#00462A' }}>
                        <Link href='/job'>
                            <a>
                                관심 직무
                            </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="pageMenuStyle" key="2" style={{ color: '#00462A' }}>
                        <Link href="/people">
                            <a>
                                사람 찾기
                            </a>
                        </Link>

                    </Menu.Item>
                </Menu>
            </div>
            <div style={{ textAlign: 'center', background: '#FFFFFF', height: '10vh', paddingTop: '3vh' }}>
                단과 대학
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
            }}>사람</div>
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
                    dataSource={people}
                    renderItem={item => (
                        <List.Item>
                            <Card>
                                <PlusCircleFilled style={{ float: 'right' }} />
                                <h3>{item.sumnail} {item.name}</h3>
                                <p>{item.major}</p>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
            </Layout>
            </Layout>
        : <LoginForm />}
        </>



    );
};

export default People;