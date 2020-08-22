import React, { useCallback, useEffect, useState } from 'react';
import { Avatar, Button, Card, Comment, Form, Icon, Input, List, Row, Col } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const SchoolSpecCard = ({ post }) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [commentText, setCommentText] = useState('');
    const { me } = useSelector(state => state.user);
    const { commentAdded, isAddingComment } = useSelector(state => state.post);
    const dispatch = useDispatch();

    const onToggleComment = useCallback(() => {
        setCommentFormOpened(prev => !prev);
    }, []);

    const onSubmitComment = useCallback((e) => {
        e.preventDefault();
        if (!me) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                postId: post.id,
            },
        });
    }, [me && me.id]);

    useEffect(() => {
        setCommentText('');
    }, [commentAdded === true]);

    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    }, []);

    return (
        <div>
            <Card
                key={+post.createdAt}
                cover={post.img && <img alt="example" src={post.img} />}
                actions={[
                    // <Icon type="retweet" key="retweet" />,
                    // <Icon type="heart" key="heart" />,
                    // <Icon type="message" key="message" onClick={onToggleComment} />,
                    // <Icon type="ellipsis" key="ellipsis" />,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={(
                        <>
                            컴퓨터공학 16
                            <Icon style={{ float: 'right' , marginLeft:'10px'}} type="tag" key="retweet" />
                            <Icon style={{ float: 'right' }} type="heart" key="heart" />
                        </>
                    )} // a tag x -> Link tag
                />
                <Row style={{ marginTop: '20px' }} gutter={5}>
                    <Col span={6}>
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', color: '#5F5F5F', mixBlendMode: 'normal' }}>학점</div>
                        <div style={{ marginTop: '15px' }}>3.7/4.3</div>
                    </Col>
                    <Col span={6}>
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', color: '#5F5F5F', mixBlendMode: 'normal' }}>연구 경력</div>
                        <div style={{ marginTop: '15px' }}>5년차 미만</div>
                    </Col>
                    <Col span={6}>
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', color: '#5F5F5F', mixBlendMode: 'normal' }}>토익점수</div>
                        <div style={{ marginTop: '15px' }}>990</div>
                    </Col>
                    <Col span={6}>
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', color: '#5F5F5F', mixBlendMode: 'normal' }}>준비기간</div>
                        <div style={{ marginTop: '15px' }}>6개월</div>
                    </Col>
                </Row>
                <Row style={{ marginTop: '30px' }}>
                    <Col span={10}>
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', color: '#5F5F5F', mixBlendMode: 'normal' }}>논문</div>
                        <div style={{ marginTop: '15px' }}>
                            1. 주파수 대역에 따른 오류 처리-추계 통신학술지에 실림
                            2. 이동통신 안테나 설계-ICFF 학술지 기재</div>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', color: '#5F5F5F', mixBlendMode: 'normal' }}>연구 내용</div>
                        <div style={{ marginTop: '15px' }}>BFF 이용해서 처리</div>
                    </Col>

                </Row>
            </Card>
            {commentFormOpened && (
                <>
                    <Form onSubmit={onSubmitComment}>
                        <Form.Item>
                            <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" loading={isAddingComment}>삐약</Button>
                    </Form>
                    <List
                        header={`${post.Comments ? post.Comments.length : 0} 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments || []}
                        renderItem={item => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </>
            )}
        </div>
    );
};

SchoolSpecCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object,
    }),
};

export default SchoolSpecCard;
