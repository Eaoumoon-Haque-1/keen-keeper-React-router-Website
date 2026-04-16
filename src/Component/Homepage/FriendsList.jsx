import React from 'react';
import useFriends from '../../hooks/useFriends';
import { RingLoader } from 'react-spinners';
import FriendCard from '../../UI/FriendCard';


const FriendsList = () => {
    const {friends,loading} = useFriends();
    
    return (
        <div className='container mx-auto '>
            <p className='mb-4 text-2xl font-semibold'>Your Friends</p>
            {
                    loading ? ( 
                    <div className='flex items-center justify-center p-10'>
                        <RingLoader />
                    </div> 
                    ) : 
                    ( <div className='grid gap-3 md:gap-6 grid-cols-1 mb-20 md:grid-cols-2 lg:grid-cols-3 '>
                        {
                            friends.map((friend,idx)=> <FriendCard friend={friend} key={idx}></FriendCard>)
                        }
                    </div> )
            }
            
        </div>
    );
};

export default FriendsList;