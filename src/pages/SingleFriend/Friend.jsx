import React, { useContext} from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import { RingLoader } from "react-spinners";
import "./Friend.css";
import { IoAlarmSharp } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { TiMessages } from "react-icons/ti";
import { FaVideo } from "react-icons/fa";
import { InteractionsWIthFriendsContext } from "../../Context/InteractionsWIthFriendsContext";
import { toast } from "react-toastify";

const Friend = () => {
  const { friends, loading } = useFriends();
  const { id } = useParams();
  const expectedFriend = friends.find((friend) => friend.id == id);
  //   console.log(expectedFriend);
  const { interactions, setInteractions } = useContext(
    InteractionsWIthFriendsContext,
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center p-10">
        <RingLoader />
      </div>
    );
  }
  const { tags } = expectedFriend;
  // console.log(tags);
  const handleInteractions = (type) => {
  
    const newInteraction = {
      friendId: expectedFriend.id,
      friendName: expectedFriend.name,
      actionType: type,
      touchedAt: new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    setInteractions([...interactions, newInteraction]);
    toast(`${type} with ${expectedFriend.name}`);
  };
//   console.log(interactions);
  return (
    <div className="w-7/8 mx-auto py-20">
      <div className="friend-page">
        <div className="friend-dashboard">
          <div className="profile-card card">
            <div className="profile-top">
              <div className="avatar-wrap">
                <img
                  src={expectedFriend.picture}
                  alt={expectedFriend.name}
                  className="avatar"
                />
              </div>

              <h2 className="profile-name">{expectedFriend.name}</h2>

              <div className="badge-row">
                {expectedFriend.status == "Overdue" ? (
                  <span className="badge badge-danger">
                    {expectedFriend.status}
                  </span>
                ) : expectedFriend.status == "On-Track" ? (
                  <span className="badge badge-success">
                    {expectedFriend.status}
                  </span>
                ) : (
                  <span className="badge badge-mild">
                    {expectedFriend.status}
                  </span>
                )}
                {tags.map((tag, idx) => {
                  return (
                    <span key={idx} className="badge badge-success">
                      {tag}
                    </span>
                  );
                })}
              </div>

              <p className="profile-quote">{expectedFriend.bio}</p>

              <p className="profile-preferred">{expectedFriend.email}</p>
            </div>
          </div>
          {/* profile card end */}
          <div className="stat-card card stat-card-1">
            <h3 className="stat-number">{expectedFriend.days_since_contact}</h3>
            <p className="stat-label">Days Since Contact</p>
          </div>

          <div className="stat-card card stat-card-2">
            <h3 className="stat-number">{expectedFriend.goal}</h3>
            <p className="stat-label">Goal (Days)</p>
          </div>

          <div className="stat-card card stat-card-3">
            <h3 className="stat-date">{expectedFriend.next_due_date}</h3>
            <p className="stat-label">Next Due</p>
          </div>

          <div className="goal-card card">
            <div className="flex justify-between">
              <div>
                <h3 className="goal-title">Relationship Goal</h3>
                <p className="goal-text">
                  Connect every <strong>30 days</strong>
                </p>
              </div>

              <button className="btn bg-white text-black">Edit</button>
            </div>
          </div>

          <div className="actions-stack">
            <button className="action-mini">
              <span className="mini-icon">
                <IoAlarmSharp />
              </span>
              <span>Snooze 2 Weeks</span>
            </button>

            <button className="action-mini">
              <span className="mini-icon">▭</span>
              <span>Archive</span>
            </button>

            <button className="action-mini danger">
              <span className="mini-icon">🗑</span>
              <span>Delete</span>
            </button>
          </div>

          <div className="quick-card card">
            <h3 className="quick-title">Quick Check-In</h3>

            <div className="quick-grid">
              <button
                className="quick-btn"
                onClick={() => handleInteractions("Call")}
              >
                <span className="quick-icon">
                  <LuPhoneCall />
                </span>
                <span>Call</span>
              </button>

              <button
                className="quick-btn"
                onClick={() => handleInteractions("Text")}
              >
                <span className="quick-icon">
                  <TiMessages />
                </span>
                <span>Text</span>
              </button>

              <button
                className="quick-btn"
                onClick={() => handleInteractions("Video")}
              >
                <span className="quick-icon">
                  <FaVideo />
                </span>
                <span>Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
