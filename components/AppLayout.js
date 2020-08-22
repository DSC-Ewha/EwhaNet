import React, { useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row, Layout } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { LOAD_USER_REQUEST } from '../reducers/user';
import "../styles/mainMenuStyle.css";

const AppLayout = ({ children }) => {
  const { isLoggedIn, me } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { SubMenu } = Menu;
  const { Header, Content, Sider, Footer } = Layout;

  useEffect(() => {
    if (!me) {
      dispatch({
        type: LOAD_USER_REQUEST,
      });
    }
  }, []);

  return (

    <div>
      <Menu style={{ background: '#19442C', color: '#FFFFFF', borderBottom: '1px solid #FFFFFF' }} mode="horizontal" triggerSubMenuAction="click">
        <Menu.Item className="mainMenuStyle" key="home"><Link href="/"><a style={{ fontFamily: 'Noto Sans KR', color: '#FFFFFF', border: '0.2px', solid: '#FFFFFF' }}>CareerHelper</a></Link></Menu.Item>
        <Menu.Item className="mainMenuStyle" style={{ float: 'right' }} key="job"><Link href="/job"><a style={{ fontFamily: 'Noto Sans KR', color: '#FFFFFF', border: '0.2px', solid: '#FFFFFF' }}> 직무탐색</a></Link></Menu.Item>
        <Menu.Item className="mainMenuStyle" style={{ float: 'right' }} key="company"><Link href="/company"><a style={{ fontFamily: 'Noto Sans KR', color: '#FFFFFF', border: '0.2px', solid: '#FFFFFF' }}>기업</a></Link></Menu.Item>
        <Menu.Item className="mainMenuStyle" style={{ float: 'right' }} key="scholar"><Link href="/scholar"><a style={{ fontFamily: 'Noto Sans KR', color: '#FFFFFF', border: '0.2px', solid: '#FFFFFF' }}>대학원 및 로스쿨</a></Link></Menu.Item>
      </Menu>
     {children}
     <Footer style={{background:'#222222'}}></Footer>
    </div >


  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
