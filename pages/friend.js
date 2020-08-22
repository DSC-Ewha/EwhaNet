import React from 'react';
import { Button, List, Card, Icon, Layout,Avatar } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import { PlusCircleFilled } from '@ant-design/icons';
import UserProfile from '../components/UserProfile';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
const Profile = () => {
  const { me } = useSelector(state => state.user);
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

  return (
    <>
      {me ?
        <Layout style={{ minHeight: '100vh' }}>


          <UserProfile />
          <Layout>
            <div style={{ marginLeft: '32px', marginTop: '20px' }}>
              {/* <NicknameEditForm /> */}
              <List
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>친구 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={people}
                renderItem={item => (
                  <List.Item style={{ marginTop: '20px' }}>
                    <Card>
                      {/* <PlusCircleFilled style={{ float: 'right' }} /> */}
                      <h3>{item.sumnail} {item.name} </h3>
                      <p>{item.major}</p>
                    </Card>
                  </List.Item>
                )}
              />
              {/* <List
            style={{ marginBottom: '20px' }}
            grid={{ gutter: 4, xs: 2, md: 3 }}
            size="small"
            header={<div>팔로워 목록</div>}
            loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
            bordered
            dataSource={['제로초', '바보', '노드버드오피셜']}
            renderItem={item => (
              <List.Item style={{ marginTop: '20px' }}>
                <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
              </List.Item>
            )}
          /> */}
            </div>
          </Layout>
        </Layout>
        : <LoginForm />}
    </>

  );
};

export default Profile;
