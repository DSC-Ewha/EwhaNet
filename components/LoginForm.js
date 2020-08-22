import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../pages/signup'; // TODO: util 폴더로 옮기기
import { LOG_IN_REQUEST } from '../reducers/user';

const LoginForm = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { isLoggingIn } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        userId: id,
        password,
      },
    });
  }, [id, password]);

  return (
    <>
      <div style={{ background: '#19442C', height: '90vh', textAlign: 'center'}}>
        <Form onSubmit={onSubmitForm} style={{ padding: '10px' }}>
          <div style={{  textAlign: 'center' , marginTop:'10vh',  fontFamily: 'Noto Sans KR',fontStyle: 'normal',fontWeight: 'normal',fontSize: '28px',
lineHeight: '41px',color:'#FFFFFF'}}>
            CareerHelper
          </div>
          <div style={{ width: '40vw', textAlign: 'center' , marginTop:'10vh', marginLeft:'30vw',marginRight:'30vw'}}>
            <Input name="user-id" placeholder="ID" value={id} onChange={onChangeId} required />
            <Input name="user-password" style={{marginTop:'1vh'}} placeholder="PW" value={password} onChange={onChangePassword} type="password" required />
          </div>
          <div style={{ marginTop: '10px' }}>
            <Button style={{ background: "#FFFFFF", color: "#222222" ,boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.25)',
borderRadius: '5px', borderColor:'#FFFFFF'}} type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
            <Link href="/signup"><a><Button style={{ background: "#222222", color: '#FFFFFF', marginLeft:'1vw' ,boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.25)',
borderRadius: '5px', borderColor:'#222222'}}>회원가입</Button></a></Link>
          </div>
        </Form>
      </div>
      <div style={{ background: '#222222', height: '10vh', textAlign: 'center' }}>
      </div>
    </>
  );
};

export default LoginForm;
