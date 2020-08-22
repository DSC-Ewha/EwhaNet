import React, { useCallback, useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';
import { FileImageOutlined } from '@ant-design/icons';

const MessageForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);

  useEffect(() => {
    if (postAdded) {
      setText('');
    }
  }, [postAdded]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        content: text.trim(),
      },
    });
  }, [text]);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    // '10px 0 20px' 
    <Form encType="multipart/form-data" onSubmit={onSubmitForm} style={{width:'70vw'}}>
      <div style={{background:'#FFFFFF', height:'12vh'}}>
        <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" value={text} onChange={onChangeText} style={{borderColor:'#FFFFFF'}} />
        <input type="file" multiple hidden />
        <Button style={{borderColor:'#FFFFFF',float:'left'}}> <FileImageOutlined /> 이미지</Button>
        <Button type="primary" style={{ float: 'right', background: '#19442C', borderColor: '#19442C' }} htmlType="submit" loading={isAddingPost}>전송</Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={`http://localhost:3065/${v}`} style={{ width: '200px' }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default MessageForm;
