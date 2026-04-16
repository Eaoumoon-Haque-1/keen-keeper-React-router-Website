import React, { useContext } from "react";
import { InteractionsWIthFriendsContext } from "../../Context/InteractionsWIthFriendsContext";
import { MdVideoCameraFront } from "react-icons/md";
import { LuMessageCircle, LuPhoneCall } from "react-icons/lu";

const Timeline = () => {
  const { interactions, setInteractions } = useContext(
    InteractionsWIthFriendsContext,
  );
  // console.log(interactions,"interactions: ");
  //   const newInteraction = {
  //       friendId: expectedFriend.id,
  //       friendName: expectedFriend.name,
  //       actionType: type,
  //       touchedAt: new Date().toLocaleDateString("en-US", {
  //         weekday: "long",
  //         month: "long",
  //         day: "numeric",
  //         year: "numeric",
  //       }),
  return (
    <div className="container mx-auto space-y-4 my-20">
      <p className="text-2xl lg:text-5xl font-bold">Timeline</p>
      {interactions.map((interaction, idx) => {
        return (
          <div key={idx} className="flex gap-2 items-center shadow-md bg-slate-100 p-4">
            <div >
              {interaction.actionType == "Text" ? (
                <LuMessageCircle className="h-10 w-10"/>
              ) : interaction.actionType == "Video" ? (
                <MdVideoCameraFront className="h-10 w-10"/>
              ) : (
                <LuPhoneCall className="h-10 w-10"/>
              )}
            </div>
            <div>
                <p> <b>{interaction.actionType}</b> with {interaction.friendName}</p>
                <p>{interaction.touchedAt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
