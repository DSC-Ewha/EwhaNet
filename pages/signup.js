import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { SIGN_UP_REQUEST } from '../reducers/user';

const TextInput = ({ value }) => (
  <div>{value}</div>
);

TextInput.propTypes = {
  value: PropTypes.string,
};

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [id, onChangeId] = useInput('');
  const [nick, onChangeNick] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();
  const { isSigningUp, me } = useSelector(state => state.user);

  useEffect(() => {
    if (me) {
      alert('로그인했으니 메인페이지로 이동합니다.');
      Router.push('/');
    }
  }, [me && me.id]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        userId: id,
        password,
        nickname: nick,
      },
    });
  }, [id, nick, password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }} >
        
        <div style={{marginLeft:'40vw', marginTop:'100px', fontFamily: 'Noto Sans KR',fontStyle: 'normal',fontWeight: 'normal',fontSize: '25px',color: '#5F5F5F'}}>
          회원가입
        </div>
        
          <br />
          <div style={{marginLeft:'33vw', marginTop:'20px'}}>
          <label htmlFor="user-id">이메일</label>
          <br/>
          <Input style={{width:'300px'}} name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div style={{marginLeft:'33vw'}}>
          <label htmlFor="user-nick">이름</label>
          <br />
          <Input name="user-nick" style={{width:'300px'}} value={nick} required onChange={onChangeNick} />
        </div>
        <div style={{marginLeft:'33vw'}}>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" style={{width:'300px'}} type="password" value={password} required onChange={onChangePassword} />
        </div>
        <div style={{marginLeft:'33vw'}}>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
            style={{width:'300px'}} 
          />
          {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div style={{marginLeft:'33vw'}}>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>개인정보 활용에 동의합니다.</Checkbox>
          {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
        </div>
        <div style={{ marginTop: 10, marginLeft:'33vw' }}>
          <Button type="primary" htmlType="submit" loading={isSigningUp} style={{background:'#1A442C', color:'#FFFFFF'}}>가입하기</Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;
