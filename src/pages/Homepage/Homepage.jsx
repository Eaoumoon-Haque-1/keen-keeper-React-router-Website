import React from 'react';
import Banner from '../../Component/Homepage/Banner';
import CountStat from '../../Component/Homepage/CountStat';
import FriendsList from '../../Component/Homepage/FriendsList';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <CountStat></CountStat>
            <FriendsList></FriendsList>
        </div>
    );
};

export default Homepage;