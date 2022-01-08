import React from 'react';
import './Post.css';
import Author from './Author';
import Statistics from './Statistics';
import Tweet from './Tweet';

const Post = ({ author, tweet, statistics }) => {
    return (
        <div className='post'>
            <Author name={author.name} nickname={author.nickname} photo={author.photo}/>
            <Tweet img={tweet.img} text={tweet.text} date={tweet.date} location={tweet.location}/>
            <Statistics retweets={statistics.retweets} quoteTweets={statistics.quoteTweets} likes={statistics.likes}/>
        </div>
    );
};

export default Post;