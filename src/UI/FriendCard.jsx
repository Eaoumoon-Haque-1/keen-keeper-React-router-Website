import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const { id,tags } = friend;
  return (
    <Link to={`/friend/${id}`}>
      <div className=" bg-base-100 w-96 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img
            src={friend.picture}
            alt={friend.name}
            className="rounded-xl mx-auto"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{friend.name}</h2>
          <p className="text-[#64748bFF]">{friend.days_since_contact}d ago</p>
          <div className="flex justify-center items-center space-x-1">
            {tags.map((tag, idx) => {
              return (
                <button key={idx} className="btn bg-[#cbfadbFF] rounded-3xl">
                  {tag}
                </button>
              );
            })}
          </div>
          <div className="card-actions">
            {friend.status == "Overdue" ? (
              <button className="btn bg-[#ef4444FF] rounded-3xl text-white">
                {friend.status}
              </button>
            ) : friend.status == "On-Track" ? (
              <button className="btn bg-[#efad44FF] rounded-3xl text-white">
                {friend.status}
              </button>
            ) : (
              <button className="btn bg-[#244d3fFF] rounded-3xl text-white">
                {friend.status}
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
