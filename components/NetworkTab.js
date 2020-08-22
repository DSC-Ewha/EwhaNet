import { Avatar, Card, Button, Layout, Menu, List, Skeleton } from 'antd';
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
import Link from 'next/link';

const NetworkTab = () => {
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);
  const { Sider } = Layout;

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
      <Menu style={{ width: '200px', color: "FFFFFF" }} theme="light" mode="inline">
        <Card
          style={{ background: "#FFFFFF" }}
        >
          <Card.Meta
            title={<h2 style={{color:"#222222"}}>DBA</h2>}
            description={<p>(Database Admin)</p>}
          />
          {/* "rgb(0, 21, 41, 0.7)"  ,color: "#FFFFFF"*/}
          <Button style={{  background: "#FFFFFF"}}><Link href="/"><a>나가기</a></Link></Button>
        </Card>
        <Menu.Item key="1" style={{background:'#222222', color:'#FFFFFF'}}>Channels<Button style={{ float:'right', background: "#FFFFFF",height:'25px',  marginTop:'8px'}}>+</Button></Menu.Item>
        {/* <Menu.Item key="2"><Link href="/message"><a>메시지</a></Link></Menu.Item> */}
        {/* <Card title="Channels" style={{background:'#222222'}} bordered={false} extra={<a href="#">+</a>}> */}
          <List
          style={{background: 'rgba(135, 185, 74, 0.1)',}}
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={joblist}
            renderItem={item => (
              <List.Item
              style={{marginLeft:'10px'}}
                // actions={[<a key="list-delete">x</a>]}
              >
                <List.Item.Meta
                  title={<a href="/network"><p>#DBA</p></a>}
                />

              </List.Item>
            )}
          />

        {/* </Card> */}
      </Menu>
    </Sider>

  );
};

export default NetworkTab;