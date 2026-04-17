import React, { useContext, useState } from "react";
import { InteractionsWIthFriendsContext } from "../../Context/InteractionsWIthFriendsContext";
import { MdVideoCameraFront } from "react-icons/md";
import { LuMessageCircle, LuPhoneCall } from "react-icons/lu";

const Timeline = () => {
  const { interactions, setInteractions } = useContext(
    InteractionsWIthFriendsContext,
  );
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredInteractions =
    activeFilter === "All"
      ? interactions
      : interactions.filter(
          (interaction) => interaction.actionType === activeFilter,
        );
  const filterButtons = ["All", "Text", "Call", "Video"];

  const removeInteraction = (interaction) => {
    const presentInteractions = interactions.filter(
      (i) =>
        !(
          interaction.friendId == i.friendId &&
          interaction.actionType == i.actionType
        ),
    );
    setInteractions(presentInteractions);
    // console.log(interaction);
  };

  return (
    <div className="container mx-auto space-y-4 my-20">
      <p className="text-2xl lg:text-5xl font-bold">Timeline</p>

      <div className="flex flex-wrap gap-3">
        {filterButtons.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border shadow-sm
              ${
                activeFilter === filter
                  ? "bg-[#244d3f] text-white border-[#244d3f] scale-105"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-slate-100 hover:border-gray-300"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {filteredInteractions.length == 0 ? (
        <h2 className="font-bold text-2xl my-10 text-center bg-slate-100 p-5">
          No Record At the Moment
        </h2>
      ) : (
        filteredInteractions.map((interaction, idx) => {
          return (
            <div className="flex justify-between shadow-md bg-slate-100 p-4">
              <div key={idx} className="flex gap-2 items-center ">
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
                    <b>{interaction.actionType}</b> with{" "}
                    {interaction.friendName}
                  </p>
                  <p>{interaction.touchedAt}</p>
                </div>
              </div>
              <button
                onClick={() => removeInteraction(interaction)}
                className="btn bg-red-700 text-white rounded-lg"
              >
                Remove
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Timeline;
