import React from 'react';
import useFriends from '../../hooks/useFriends';

const FriendsList = () => {
    const {friends,loading} = useFriends();
    console.log(friends,loading, "friends");
    
    return (
        <div>
            friends
        </div>
    );
};

export default FriendsList;