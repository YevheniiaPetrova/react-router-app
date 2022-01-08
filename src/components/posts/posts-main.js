import React from "react";
import './posts-main.css';
import Post from "./Post";
import Hubble from '../../assets/hubble.jpeg';
import Nebula from '../../assets/Nebula.jpeg';
import Falcon9 from '../../assets/Falcon9.jpeg';
import SpaceX from '../../assets/SpaceX.jpeg';
import Mars from '../../assets/Mars.png';
import Space_hub from '../../assets/Space_hub.jpeg';

const tweets = [{
    tweetAuthor: {
        name: 'Hubble',
        nickname: "@NASAHubble",
        photo: Hubble
    },
    tweetContent: {
        text: `Feast your eyes on the stunning Orion Nebula. 
                        Is it just us, or does it look like a space turkey? #HappyThanksgiving from the Hubble team!`,
        img: Nebula,
        date: '5:00 PM · Nov 25, 2021',
        location: 'Sprinklr'
    },
    statistics: {
        retweets: '1,761',
        quoteTweets: '99',
        likes: '14.7K'
    }
}, 
{   tweetAuthor: {
        name: 'SpaceX',
        nickname: "@SpaceX",
        photo: SpaceX
        },
    tweetContent: {
        text: "More photos of Falcon 9 launching Dragon’s 24th resupply mission to the @Space_Station → http://flickr.com/spacex/",
        img: Falcon9,
        date: '4:08 PM · Dec 22, 2021',
        location: "NASA and NASA's Kennedy Space Center"
    },
    statistics: {
        retweets: '1,895',
        quoteTweets: '71',
        likes: '16.3K'
    }
},
{   tweetAuthor: {
        name: 'Space_Hub',
        nickname: "@@SpaceHub_SL",
        photo: Space_hub
        },
    tweetContent: {
        text: `#Mars is smiling Slightly smiling face`,
        img: Mars,
        date: '3:11 PM · Oct 25, 2021',
        location: 'Sprinklr'
    },
    statistics: {
        retweets: '2,119',
        quoteTweets: '193',
        likes: '18.6K'
    } 
}]

function Tweets() {
    return <div className="tweets">
        {tweets.map((tweet, index) =>
            <div className="posts" key={index}>
                <Post author={tweet.tweetAuthor} tweet={tweet.tweetContent} statistics={tweet.statistics} />
            </div>)}
    </div>
}

export default Tweets;