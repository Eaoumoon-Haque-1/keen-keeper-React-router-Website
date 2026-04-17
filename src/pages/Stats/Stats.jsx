import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InteractionsWIthFriendsContext } from "../../Context/InteractionsWIthFriendsContext";

const Stats = () => {
  const { interactions } = useContext(InteractionsWIthFriendsContext);

  const textNumber = interactions.filter(
    (interaction) => interaction.actionType == "Text",
  ).length;
  const callNumber = interactions.filter(
    (interaction) => interaction.actionType == "Call",
  ).length;
  const videoNumber = interactions.filter(
    (interaction) => interaction.actionType == "Video",
  ).length;
  

  const data = [
    { name: "Text", value: textNumber, fill: "#162E93" },
    { name: "Call", value: callNumber, fill: "#0088FE" },
    { name: "Video", value: videoNumber, fill: "#9AD872" },
  ];
    

  
  return (
    <div className="container mx-auto pb-20">
      <p className="font-bold text-5xl text-[#1f2937] mt-20 mb-5">
        Friendship Analytics
      </p>
      <div className="p-8 rounded-lg shadow bg-slate-100">
        <p className="font-medium mb-6">By Interaction Type</p>
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            margin: "auto",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive="true"
          />
          <Legend
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: "50px" }}
          ></Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;
