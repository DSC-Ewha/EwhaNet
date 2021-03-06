import React, { useCallback, useEffect, useState } from 'react';
import { Avatar, Button, Card, Comment, Form, Icon, Input, List, Tooltip } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const MessageCard = ({ post }) => {
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
        <div style={{width:'60vw'}}>
            {/* <Card
                key={+post.createdAt}
                cover={post.img && <img alt="example" src={post.img} />}
                actions={[
                    <Icon type="retweet" key="retweet" />,
                    <Icon type="heart" key="heart" />,
                    <Icon type="message" key="message" onClick={onToggleComment} />,
                    <Icon type="ellipsis" key="ellipsis" />,
                ]}
                extra={<Button>팔로우</Button>}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={(
                        <div>{post.content.split(/(#[^\s]+)/g).map((v) => {
                            if (v.match(/#[^\s]+/)) {
                                return (
                                    <Link href='/hashtag' key={v}><a>{v}</a></Link>
                                );
                            }
                            return v;
                        })}</div>
                    )} // a tag x -> Link tag
                />
            </Card> */}
           
                <Comment
                    style={{background:'#FFFFFF'}}
                    actions={<span key="comment-list-reply-to-0" onClick={onToggleComment} >Reply to</span>}
                    author={post.User.nickname}
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    content={(
                        <div>{post.content.split(/(#[^\s]+)/g).map((v) => {
                            if (v.match(/#[^\s]+/)) {
                                return (
                                    <Link href='/hashtag' key={v}><a>{v}</a></Link>
                                );
                            }
                            return v;
                        })}</div>
                    )}
                    datetime={(
                        <Tooltip
                          title={post.createdAt}
                        >
                          <span>
                            {post.createdAt}
                          </span>
                        </Tooltip>
                      )}

                    // {+post.createdAt}
                />
            

            {/* {commentFormOpened && (
                <>
                    <Form onSubmit={onSubmitComment}>
                        <Form.Item>
                            <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" loading={isAddingComment}>전송</Button>
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
            )} */}
        </div>
    );
};

MessageCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object,
    }),
};

export default MessageCard;