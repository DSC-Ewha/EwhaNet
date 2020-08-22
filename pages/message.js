import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MessageForm from '../components/MessageForm';
import MessageCard from '../components/MessageCard';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';
import { Layout } from 'antd';
import "../styles/messageScrollStyle.css";
import {CloseOutlined} from '@ant-design/icons';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
const Message = () => {
    const { me } = useSelector(state => state.user);
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
        <div className="messageScrollDiv" style={{ marginLeft: 40, marginTop: 20, boxShadow:'4px 4px 4px gray', width:'71vw', borderTop:'1px solid', borderLeft:'1px solid'}}>
            <div style={{ background: 'rgba(135, 185, 74, 0.1)', width: '71vw', height: '6vh', paddingTop: '1vh' , paddingLeft:'10px'}}>
                <div style={{ background: '#222222', float: 'left', borderRadius: '17.5px', fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', height: '4vh', color: '#FFFFFF', border: '0.1px solid #FFFFFF', width: '70px', textAlign: 'center', paddingTop: '0.5vh' }}>
                    김민지</div>
                <div style={{ background: '#222222', float: 'left', borderRadius: '17.5px', fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', height: '4vh', color: '#FFFFFF', border: '0.1px solid #FFFFFF', width: '70px', textAlign: 'center', paddingTop: '0.5vh' }}>
                    구민정</div>
                <div style={{float:'right', paddingRight:'10px'}}> <CloseOutlined /></div>
            </div>
            <MessageForm />
            <div style={{ padding:'15px', background:'#FFFFFF'}}>
                {mainPosts.map((c) => {
                    return (
                        <MessageCard key={c} post={c} />
                    );
                })}
            </div>
        </div> 
        </Layout>
        </Layout>
        : <LoginForm />}
                </>
    );
};

export default Message;