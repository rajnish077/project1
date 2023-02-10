import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <div className="content-bar">
        <div>
          <h5>Q No. 1</h5>
        </div>
        <div className="d-flex">
          <h5 className="mx-2">View in:</h5>
          <select name="" id="">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </div>
      <div className="content-questions ">
        <div className="left-window p-2">
          <h5>Question Description</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ab
            fugiat nulla reprehenderit animi, sed assumenda ipsum consequatur
            perferendis ea iste! Quibusdam earum facilis accusamus itaque
            molestiae voluptas voluptatum suscipit repellendus, harum ab nisi.
            In sit recusandae reiciendis asperiores dolorem adipisci a porro
            sequi animi corporis, est incidunt iure inventore?
          </p>
        </div>
        <div className="right-window p-2">
          <h5>Question</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            quaerat obcaecati qui dolore aperiam doloribus aliquid dolores,
            blanditiis debitis esse.
          </p>
          <div className="question-options">
            <li style={{listStyle:'none',alignContent:'center'}}><input type="radio" name="option" id="A" /> OptionA</li>
            <li style={{listStyle:'none',alignContent:'center'}}><input type="radio" name="option" id="B" /> OptionB</li>
            <li style={{listStyle:'none',alignContent:'center'}}><input type="radio" name="option" id="C" /> OptionC</li>
            <li style={{listStyle:'none',alignContent:'center'}}><input type="radio" name="option" id="D" /> OptionD</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
