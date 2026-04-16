import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to,children}) => {
    return (
        <div>
            <NavLink to={to} className={({isActive})=>`font-semibold py-4 px-3 flex items-center justify-center gap-2 rounded-xl ${isActive ? "bg-[#244d3fFF] text-white":"text-[#64748bFF]"}`}>{children}</NavLink>
        </div>
    );
};

export default MyNavLink;