import React from 'react';
import './Statistics.css'

const Statistics = ({retweets, quoteTweets, likes}) => {
    return <div className='statistics'>
                <div className='stat-name'>
                    <span className='numbers'>{retweets} </span>
                    <span className='text'>Retweets</span>
                </div>
                <div className='stat-name'>
                    <span className='numbers'>{quoteTweets} </span>
                    <span className='text'>Quote Tweets</span>
                </div>
                <div className='stat-name'>
                    <span className='numbers'>{likes} </span>
                    <span className='text'>Likes</span>
                </div>
            </div>
};

export default Statistics;