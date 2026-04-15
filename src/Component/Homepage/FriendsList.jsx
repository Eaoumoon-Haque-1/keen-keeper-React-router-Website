import React from 'react';
import useFriends from '../../hooks/useFriends';

const FriendsList = () => {
    const {friends,loading} = useFriends();
    
    return (
        <div className='container mx-auto '>
            <p className='mb-4 text-2xl font-semibold'>Your Friends</p>
            {
                friends.map(()=>{
                    loading ? "" : ""
                })
            }
        </div>
    );
};

export default FriendsList;