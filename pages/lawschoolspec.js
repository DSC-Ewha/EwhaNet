import React, { useState, useCallback } from 'react';
import { Input, Menu, Select, Button, List, Card, Layout, Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import { useEffect } from 'react';
// import SchoolSpecForm from '../components/SchoolSpecForm';
import LawSchoolSpecCard from '../components/LawSchoolSpecCard';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';


const Lawschoolspec = () => {
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


    const { mainPosts } = useSelector(state => state.post);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch({
        type: LOAD_MAIN_POSTS_REQUEST,
      });
    }, []);

    return (

        <>
        {me ?
        <Layout style={{ minHeight: '100vh' }}>
            <UserProfile />
            <Layout>
                <div style={{ padding: '10px', background: '#222222', height: '10vh' }}>
                    <div style={{
                        padding: '2vh',
                        fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'bold',
                        fontSize: '20px', lineHeight: '34px', color: '#FFFFFF', mixBlendMode: 'normal'
                    }}>
                         이화여자대학교 법학전문대학원
                    <Button style={{ background: '#222222', color: '#FFFFFF', marginLeft: '1vw' }}>리뷰 추가하기</Button>
                    </div>

                </div>
                <div style={{ textAlign: 'center' }}>
                    <Menu mode='horizontal'
                        style={{
                            background: 'rgba(135, 185, 74, 0.1)', color: '#00462A', fontFamily: 'Noto Sans KR', fontStyle: 'normal',
                            fontWeight: 'bold', textAlign: 'center'
                        }}>
                        <Menu.Item className="pageMenuStyle" key="1" style={{ color: '#00462A' }}>
                            <Link href='/lawschoolspec'>
                                <a>
                                    스펙/면접/시험
                            </a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="pageMenuStyle" key="2" style={{ color: '#00462A' }}>
                            <Link href="/lawschoollife">
                                <a>
                                    로스쿨 분위기
                            </a>
                            </Link>
                        </Menu.Item>

                    </Menu>
                </div>
                <div className="site-layout-background" style={{ marginLeft: 40, marginTop: 20, marginRight: 20, minHeight: 360 }}>
                {/* <Button style={{marginLeft:'20px',floata:'right',background:'#222222', borderRadius:'25px', color:'#FFFFFF'}}>추가하기 +</Button> */}
                    {mainPosts.map((c) => {
                        return (
                            <LawSchoolSpecCard key={c} post={c} />
                        );
                    })}

                </div>
                {/* </div> */}
            </Layout>
            </Layout>
        : <LoginForm />}
        </>



    );
};

export default Lawschoolspec;