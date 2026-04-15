import React from "react";

const FriendCard = ({ friend }) => {
  const { tags } = friend;
  return (
    <div className=" bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={friend.picture} alt={friend.name} className="rounded-xl mx-auto" />
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
          <button className="btn btn-primary rounded-3xl">{friend.status}</button>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
