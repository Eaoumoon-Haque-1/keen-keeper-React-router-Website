import React, { useContext } from "react";
import { InteractionsWIthFriendsContext } from "../../Context/InteractionsWIthFriendsContext";
import { MdVideoCameraFront } from "react-icons/md";
import { LuMessageCircle, LuPhoneCall } from "react-icons/lu";

const Timeline = () => {
  const { interactions } = useContext(InteractionsWIthFriendsContext);

  return (
    <div className="container mx-auto space-y-4 my-20">
      <p className="text-2xl lg:text-5xl font-bold">Timeline</p>

      {interactions.length == 0 ? (
        <h2 className="font-bold text-2xl my-10 text-center bg-slate-100 p-5">No Record At the Moment</h2>
      ) : (
        interactions.map((interaction, idx) => {
          return (
            <div
              key={idx}
              className="flex gap-2 items-center shadow-md bg-slate-100 p-4"
            >
              <div>
                {interaction.actionType == "Text" ? (
                  <LuMessageCircle className="h-10 w-10" />
                ) : interaction.actionType == "Video" ? (
                  <MdVideoCameraFront className="h-10 w-10" />
                ) : (
                  <LuPhoneCall className="h-10 w-10" />
                )}
              </div>
              <div>
                <p>
                  {" "}
                  <b>{interaction.actionType}</b> with {interaction.friendName}
                </p>
                <p>{interaction.touchedAt}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Timeline;
