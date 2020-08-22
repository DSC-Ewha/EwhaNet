import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';
import { Layout } from 'antd';
import "../styles/messageScrollStyle.css";
import {CloseOutlined} from '@ant-design/icons';
import NetworkTab from '../components/NetworkTab';
import LoginForm from '../components/LoginForm';
const Network = () => {
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
        <Layout style={{ minHeight: '100vh' }}>         <NetworkTab />
        <Layout>
        <div className="messageScrollDiv" style={{ marginLeft: 40, marginTop: 20, marginRight:20, minHeight: 360 }}>
            <PostForm />
            <div style={{ padding:'15px', background:'#FFFFFF'}}>
                {mainPosts.map((c) => {
                    return (
                        <PostCard key={c} post={c} />
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

export default Network;