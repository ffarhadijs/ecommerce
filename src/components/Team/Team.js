import React from "react";
import { teamData } from "../../data/dummyData/dummyData";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import Tooltip from "../common/Tooltip/Tooltip";

const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-20">
      <div className="pb-16">
        <span className="text-slate-800 font-semibold text-3xl pb-4 border-b-4 border-yellow-300">
          Our Team
        </span>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap w-5/6 mx-auto">
        {teamData.map((member) => (
          <div
            key={member.id}
            className=" w-full sm:w-1/2 md:w-1/3 h-auto p-12 sm:p-8 lg:p-12 text-center flex flex-col justify-center items-center"
          >
            <div className="box relative rounded-full w-full h-auto mb-4">
              <img
                src={member.img}
                className=" rounded-full w-full"
                alt="team member"
              />
              <div className="tools absolute inset-0 w-full h-auto rounded-full flex flex-row justify-around items-center text-white text-3xl font-bold">
                <Tooltip title="Instagram">
                  <button className="hover:text-yellow-400 hover:scale-125 transition-all duration-500">
                    <FiInstagram style={{ display: "inline" }} />
                  </button>
                </Tooltip>
                <Tooltip title="FaceBook">
                  <button className="hover:text-yellow-400 hover:scale-125 transition-all duration-500">
                    <FiFacebook style={{ display: "inline" }} />
                  </button>
                </Tooltip>
                <Tooltip title="Twitter">
                  <button className="hover:text-yellow-400 hover:scale-125 transition-all duration-500">
                    <FiTwitter style={{ display: "inline" }} />
                  </button>
                </Tooltip>
              </div>
            </div>
            <p className="text-slate-800 font-semibold text-xl py-3">
              {member.name}
            </p>
            <span className="text-gray-700 text-xs ">{member.position}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
