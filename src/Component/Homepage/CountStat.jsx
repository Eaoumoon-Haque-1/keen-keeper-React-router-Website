import React, { useContext } from "react";
import useFriends from "../../hooks/useFriends";
import { RingLoader } from "react-spinners";
import { InteractionsWIthFriendsContext } from "../../Context/InteractionsWIthFriendsContext";

const CountStat = () => {
  const {interactions} = useContext(InteractionsWIthFriendsContext);
  const { friends, loading } = useFriends();
  if (loading)
    return (
      <div className="flex items-center justify-center p-10">
        <RingLoader />
      </div>
    );

  const onTrackCount = friends.filter(
    (friend) => friend.status === "On-Track").length;

  const needAttentionCount = friends.filter(
    (friend) => friend.status === "Overdue").length;
    
  return (
    <div className="container mx-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-10">
        <div className="shadow-lg p-8 ">
          <p className="text-3xl font-semibold text-[#244d3fFF]">
            {friends.length}
          </p>
          <p className="text-[#64748bFF] text-[18px]">Total Friends</p>
        </div>
        <div className="shadow-lg p-8">
          <p className="text-3xl font-semibold text-[#244d3fFF]">
            {onTrackCount}
          </p>
          <p className="text-[#64748bFF] text-[18px]">On Track</p>
        </div>
        <div className="shadow-lg p-8">
          <p className="text-3xl font-semibold text-[#244d3fFF]">
            {needAttentionCount}
          </p>
          <p className="text-[#64748bFF] text-[18px]">Need Attention</p>
        </div>
        <div className="shadow-lg p-8">
          <p className="text-3xl font-semibold text-[#244d3fFF]">{interactions.length}</p>
          <p className="text-[#64748bFF] text-[18px]">
            Interactions This Month
          </p>
        </div>
      </div>
      <div className="divider mb-10"></div>
    </div>
  );
};

export default CountStat;
