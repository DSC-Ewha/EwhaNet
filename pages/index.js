import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { Layout } from 'antd';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
const Home = () => {
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
      {
        me ?
          <Layout style={{ minHeight: '100vh' }} >
              <UserProfile />
              <Layout>
                <div className="site-layout-background" style={{ marginLeft: 40, marginTop: 20, marginRight: 20, minHeight: 360 }}>
                  {mainPosts.map((c) => {
                    return (
                      <PostCard key={c} post={c} />
                    );
                  })}

                </div>
              </Layout>
           
          </Layout >
          : <LoginForm />}
    </>

  );
};

export default Home;
