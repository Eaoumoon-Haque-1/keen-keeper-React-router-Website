import React from 'react';
import useFriends from '../../hooks/useFriends';

const FriendsList = () => {
    const {friends,loading} = useFriends();
    
    return (
        <div>
            {
                friends.map(()=>{
                    loading
                })
            }
        </div>
    );
};

export default FriendsList;