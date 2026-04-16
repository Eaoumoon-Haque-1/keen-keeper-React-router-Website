import React, { useState } from 'react';
import { InteractionsWIthFriendsContext } from './InteractionsWIthFriendsContext';


const InteractionsWIthFriendsProvider = ({children}) => {
    const [interactions, setInteractions] = useState([]);


    const data = {
        interactions,
        setInteractions,
    }
    return (
        <InteractionsWIthFriendsContext.Provider value={data}>
            {children}
        </InteractionsWIthFriendsContext.Provider>
    );
};

export default InteractionsWIthFriendsProvider;