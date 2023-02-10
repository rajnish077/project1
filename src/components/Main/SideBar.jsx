import React from "react";
import userImage from "../../assests/user.png";
import "./Sidebar.css";


const SideBar = () => {
  return (
    <div className="sidebar">

      <div className="top d-flex">
        <div className="top-image-wrapper">
          <img src={userImage} alt="user" />
        </div>
        <div className="top-info-wrapper d-flex flex-column ">
          <div>Time Left:15Min </div>
          <div>Abhishek Kumar</div>
        </div>
      </div>

      <div className="Middle">
        <div className="middle-heading-bar">
          <h5>Question Pallete</h5>
        </div>
        <div className="middle-question-list">
          <span id="Q1" className="items items1">1</span>
          <span className="items items1">2</span>
          <span className="items items1">3</span>
          <span className="items items1">4</span>
          <span className="items items1">5</span>
          <span className="items items1">6</span>
          <span className="items items1">7</span>
          <span className="items items1">8</span>
          <span className="items items1">9</span>
          <span className="items items1">10</span>
        </div>
      </div>

      <div className="Bottom">
        <div className="bottom-heading-bar">
          <h5>Legend (Click to View)</h5>
        </div>
        <div className="ans-color-info">
            <span className="ans-color-btn answer" >Answer</span>
            <span className="ans-color-btn noanswer" >No Answer</span>
            <span className="ans-color-btn review" >Review</span>
            <span className="ans-color-btn review2" >Review</span>
            <span className="ans-color-btn dump" >Dump</span>
            <span className="ans-color-btn novisit" >No Visit</span>
        </div>
        <div className="bottom-heading-bar">
          <h5>All Questions</h5>
        </div>
        <div className="bottom-btn-wrap">
          <span className="bottom-btn">Profile</span>
          <span className="bottom-btn">Instr</span>
          <span className="bottom-btn">Questions</span>
          <span className="bottom-btn">Submit</span>
        </div>


      </div>
    </div>
  );
};

export default SideBar;
