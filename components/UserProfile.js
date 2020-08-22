import { Avatar, Card, Button, Layout, Menu, Collapse } from 'antd';
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
import Link from 'next/link';

const UserProfile = () => {
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);
  const { Sider } = Layout;
  const { Panel } = Collapse;

  const joblist = ['DBA', '웹/앱 개발'];
  return (
    <Sider
      trigger={<Button>Menu</Button>}
      // "rgb(0, 21, 41, 1)"
      style={{ background: "#FFFFFF", color: "#FFFFFF" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu style={{ width: '200px', color: "FFFFFF" , paddingRight:'5px',paddingLeft:'10px'}} theme="light" mode="inline">
        <Card
          style={{ background: "#FFFFFF" }}
        >
          <Card.Meta
            avatar={<Avatar>{me.nickname[0]}</Avatar>}
            title={<Link href="/profile"><a style={{ color: "#222222" }}>{me.nickname}</a></Link>}
            description={<p>컴퓨터공학</p>}
          />
          {/* "rgb(0, 21, 41, 0.7)"  ,color: "#FFFFFF"*/}
          <Button type="text" onClick={onLogout} style={{marginLeft:'30px', background: "#FFFFFF", border:'solid white' , fontSize:'10px'}}>로그아웃</Button>
        </Card>
        <Menu.Item key="1" style={{border: 'solid', backgroundColor:'#222222',  borderRadius: '5px'}}><Link href="/friend"><a style={{color:'#FFFFFF'}}>인맥</a></Link></Menu.Item>
        <Menu.Item key="2" style={{border: 'solid', backgroundColor:'#222222',  borderRadius: '5px'}}><Link href="/message"><a style={{color:'#FFFFFF'}}>메시지</a></Link></Menu.Item>
        <div style={{paddingLeft:'2px', paddingRight:'1px'}}>
          <Collapse style={{border: 'solid', backgroundColor:'#222222',  borderRadius: '5px',}} bordered={false} defaultActiveKey={['1']}>
            <Panel style={{ color: '#FFFFFF', }} header={<div style={{ borderRadius: '5px',color:'#FFFFFF',}}>관심직무태그</div>} key="1" showArrow={false}>
              <div style={{ background: '#FFFFFF', width: '50px', borderRadius: '5px', paddingLeft:'5px'}}><a style={{ color: '#222222'}} href="/network"><p>#DBA</p></a></div>
              <div style={{ background: '#FFFFFF', width: '100px', borderRadius: '5px' , paddingLeft:'5px'}}><a style={{ color: '#222222' }} href="/network"><p>#영상디자인</p></a></div>
            </Panel>

          </Collapse>
        </div>
        {/* <Card title="관심직무 태그" bordered={false} extra={<a href="#">+</a>}> */}
        {/* <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={joblist}
            renderItem={item => (
              <List.Item
                actions={[<a key="list-delete">x</a>]}
              >
                <List.Item.Meta
                  title={<a href="/network"><p>#DBA</p></a>}
                />

              </List.Item>
            )}
          /> */}

        {/* </Card> */}
      </Menu>
    </Sider>

  );
};

export default UserProfile;
