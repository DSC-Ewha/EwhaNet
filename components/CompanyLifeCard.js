import React, { useCallback, useEffect, useState } from 'react';
import { Avatar, Button, Card, Comment, Form, Icon, Input, List, Row, Col } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const CompanyLifeCard = ({ post }) => {
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
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', color: '#5F5F5F', mixBlendMode: 'normal' }}>총점</div>
                        <div style={{ marginTop: '15px' }}>4/5</div>
                    </Col>
                    <Col span={6}>
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', color: '#5F5F5F', mixBlendMode: 'normal' }}>회사 분위기</div>
                        <div style={{ marginTop: '15px' }}>4/5</div>
                    </Col>
                    <Col span={6}>
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', color: '#5F5F5F', mixBlendMode: 'normal' }}>연봉</div>
                        <div style={{ marginTop: '15px' }}>3/5</div>
                    </Col>
                    <Col span={6}>
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', color: '#5F5F5F', mixBlendMode: 'normal' }}>복지</div>
                        <div style={{ marginTop: '15px' }}>2/5</div>
                    </Col>
                </Row>
                <Row style={{ marginTop: '30px' }}>
                    <Col span={10}>
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', color: '#5F5F5F', mixBlendMode: 'normal' }}>장점</div>
                        <div style={{ marginTop: '15px' }}>
                            우수한 논문 지도력으로 부족함 없는 논문 실적을 낼 수 있음.</div>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', color: '#5F5F5F', mixBlendMode: 'normal' }}>단점</div>
                        <div style={{ marginTop: '15px' }}>단점은 야근을 기본으로 하는 분위기라 모두 고강도의 업무를 함.</div>
                    </Col>

                </Row>
                <Row style={{ marginTop: '30px' }}>
                    <Col span={10}>
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', color: '#5F5F5F', mixBlendMode: 'normal' }}>회사에 바라는 점</div>
                        <div style={{ marginTop: '15px' }}>
                            바라는 점은 없고 딱히 부당한 일을 시키지 않았으면 좋겠다.</div>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', color: '#5F5F5F', mixBlendMode: 'normal' }}>코멘트</div>
                        <div style={{ marginTop: '15px' }}>
                            이 회사는 1년 후 성장하고 있을 것이다.
                        이 회사를 추천합니다.!</div>
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

CompanyLifeCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object,
    }),
};

export default CompanyLifeCard;
